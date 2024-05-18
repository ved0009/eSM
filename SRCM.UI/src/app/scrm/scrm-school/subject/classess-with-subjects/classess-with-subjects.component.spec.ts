import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassessWithSubjectsComponent } from './classess-with-subjects.component';

describe('ClassessWithSubjectsComponent', () => {
  let component: ClassessWithSubjectsComponent;
  let fixture: ComponentFixture<ClassessWithSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassessWithSubjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassessWithSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
