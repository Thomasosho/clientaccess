import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderRequirementsComponent } from './tender-requirements.component';

describe('TenderRequirementsComponent', () => {
  let component: TenderRequirementsComponent;
  let fixture: ComponentFixture<TenderRequirementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenderRequirementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderRequirementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
