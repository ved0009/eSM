import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentIDCardComponent } from './student-idcard.component';

describe('StudentIDCardComponent', () => {
  let component: StudentIDCardComponent;
  let fixture: ComponentFixture<StudentIDCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentIDCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentIDCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
