import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonAdminsComponent } from './non-admins.component';

describe('NonAdminsComponent', () => {
  let component: NonAdminsComponent;
  let fixture: ComponentFixture<NonAdminsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonAdminsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonAdminsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
