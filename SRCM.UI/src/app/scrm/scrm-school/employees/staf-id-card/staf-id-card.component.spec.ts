import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StafIdCardComponent } from './staf-id-card.component';

describe('StafIdCardComponent', () => {
  let component: StafIdCardComponent;
  let fixture: ComponentFixture<StafIdCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StafIdCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StafIdCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
