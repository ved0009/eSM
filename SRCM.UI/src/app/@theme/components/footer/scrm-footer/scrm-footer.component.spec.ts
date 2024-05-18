import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrmFooterComponent } from './scrm-footer.component';

describe('ScrmFooterComponent', () => {
  let component: ScrmFooterComponent;
  let fixture: ComponentFixture<ScrmFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrmFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
