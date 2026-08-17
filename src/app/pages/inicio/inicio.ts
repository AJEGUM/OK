import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { Hero } from '../../components/hero/hero';
import { Section01 } from '../../components/section01/section01';
import { Section02 } from '../../components/section02/section02';
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [Navbar, Hero, Section01, Section02, Footer],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  isDarkMode = false;

  ngOnInit() {
    // Al cargar la página, verificamos si el usuario ya había elegido modo oscuro antes
    // o si su sistema operativo (Windows/Mac) está en modo oscuro por defecto.
    const theme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (theme === 'dark' || (!theme && prefersDark)) {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark'); // Agrega la clase 'dark' a la etiqueta <html>
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
