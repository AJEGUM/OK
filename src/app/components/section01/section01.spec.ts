import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section01 } from './section01';

describe('Section01', () => {
  let component: Section01;
  let fixture: ComponentFixture<Section01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section01]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section01);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
