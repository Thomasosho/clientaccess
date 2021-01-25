import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderHistoryComponent } from './tender-history.component';

describe('TenderHistoryComponent', () => {
  let component: TenderHistoryComponent;
  let fixture: ComponentFixture<TenderHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenderHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
