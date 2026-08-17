import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section02 } from './section02';

describe('Section02', () => {
  let component: Section02;
  let fixture: ComponentFixture<Section02>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Section02]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section02);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
