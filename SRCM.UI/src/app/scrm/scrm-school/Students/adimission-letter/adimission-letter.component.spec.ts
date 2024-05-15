import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdimissionLetterComponent } from './adimission-letter.component';

describe('AdimissionLetterComponent', () => {
  let component: AdimissionLetterComponent;
  let fixture: ComponentFixture<AdimissionLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdimissionLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdimissionLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
