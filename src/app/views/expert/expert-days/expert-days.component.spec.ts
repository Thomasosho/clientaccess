import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertDaysComponent } from './expert-days.component';

describe('ExpertDaysComponent', () => {
  let component: ExpertDaysComponent;
  let fixture: ComponentFixture<ExpertDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
