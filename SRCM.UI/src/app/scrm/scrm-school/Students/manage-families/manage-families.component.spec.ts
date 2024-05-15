import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFamiliesComponent } from './manage-families.component';

describe('ManageFamiliesComponent', () => {
  let component: ManageFamiliesComponent;
  let fixture: ComponentFixture<ManageFamiliesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageFamiliesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageFamiliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
