import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransfersComponent } from './list-transfers.component';

describe('RecalculationOfValidityComponent', () => {
  let component: ListTransfersComponent;
  let fixture: ComponentFixture<ListTransfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTransfersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
