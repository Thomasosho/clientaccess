import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSubsctriptionComponent } from './add-subsctription.component';

describe('AddSubsctriptionComponent', () => {
  let component: AddSubsctriptionComponent;
  let fixture: ComponentFixture<AddSubsctriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSubsctriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSubsctriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
