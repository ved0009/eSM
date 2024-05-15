import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobLetterComponent } from './job-letter.component';

describe('JobLetterComponent', () => {
  let component: JobLetterComponent;
  let fixture: ComponentFixture<JobLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
