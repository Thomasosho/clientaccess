import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysAvailableComponent } from './days-available.component';

describe('DaysAvailableComponent', () => {
  let component: DaysAvailableComponent;
  let fixture: ComponentFixture<DaysAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
