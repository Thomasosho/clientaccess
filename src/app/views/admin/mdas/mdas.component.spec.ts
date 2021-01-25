import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdasComponent } from './mdas.component';

describe('MdasComponent', () => {
  let component: MdasComponent;
  let fixture: ComponentFixture<MdasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
