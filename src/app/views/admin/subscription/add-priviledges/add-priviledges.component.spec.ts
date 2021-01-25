import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPriviledgesComponent } from './add-priviledges.component';

describe('AddPriviledgesComponent', () => {
  let component: AddPriviledgesComponent;
  let fixture: ComponentFixture<AddPriviledgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPriviledgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPriviledgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
