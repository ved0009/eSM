import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrmComponent } from './scrm.component';

describe('ScrmComponent', () => {
  let component: ScrmComponent;
  let fixture: ComponentFixture<ScrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
