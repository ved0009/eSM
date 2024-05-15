import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrmHeaderComponent } from './scrm-header.component';

describe('ScrmHeaderComponent', () => {
  let component: ScrmHeaderComponent;
  let fixture: ComponentFixture<ScrmHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrmHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrmHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
