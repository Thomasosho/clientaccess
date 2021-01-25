import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCard2Component } from './table-card2.component';

describe('TableCard2Component', () => {
  let component: TableCard2Component;
  let fixture: ComponentFixture<TableCard2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableCard2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
