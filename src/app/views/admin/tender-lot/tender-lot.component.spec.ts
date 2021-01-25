import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderLotComponent } from './tender-lot.component';

describe('TenderLotComponent', () => {
  let component: TenderLotComponent;
  let fixture: ComponentFixture<TenderLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenderLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
