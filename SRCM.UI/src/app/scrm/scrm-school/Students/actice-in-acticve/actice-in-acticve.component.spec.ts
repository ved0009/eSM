import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiceInActicveComponent } from './actice-in-acticve.component';

describe('ActiceInActicveComponent', () => {
  let component: ActiceInActicveComponent;
  let fixture: ComponentFixture<ActiceInActicveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiceInActicveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiceInActicveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
