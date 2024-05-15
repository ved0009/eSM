import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintBasicListComponent } from './print-basic-list.component';

describe('PrintBasicListComponent', () => {
  let component: PrintBasicListComponent;
  let fixture: ComponentFixture<PrintBasicListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintBasicListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintBasicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
