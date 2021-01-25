import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriviledgesComponent } from './priviledges.component';

describe('PriviledgesComponent', () => {
  let component: PriviledgesComponent;
  let fixture: ComponentFixture<PriviledgesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriviledgesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriviledgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
