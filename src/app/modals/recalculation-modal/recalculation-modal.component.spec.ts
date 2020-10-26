import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecalculationModalComponent } from './recalculation-modal.component';

describe('RecalculationModalComponent', () => {
  let component: RecalculationModalComponent;
  let fixture: ComponentFixture<RecalculationModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecalculationModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecalculationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
