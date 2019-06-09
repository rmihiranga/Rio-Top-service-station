import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockmanageComponent } from './stockmanage.component';

describe('StockmanageComponent', () => {
  let component: StockmanageComponent;
  let fixture: ComponentFixture<StockmanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockmanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
