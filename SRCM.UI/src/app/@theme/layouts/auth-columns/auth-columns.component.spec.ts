import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthColumnsComponent } from './auth-columns.component';

describe('AuthColumnsComponent', () => {
  let component: AuthColumnsComponent;
  let fixture: ComponentFixture<AuthColumnsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthColumnsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthColumnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
