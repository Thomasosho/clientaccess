import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdaProfileComponent } from './mda-profile.component';

describe('MdaProfileComponent', () => {
  let component: MdaProfileComponent;
  let fixture: ComponentFixture<MdaProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdaProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdaProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
