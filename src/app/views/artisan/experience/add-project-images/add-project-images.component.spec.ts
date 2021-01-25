import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectImagesComponent } from './add-project-images.component';

describe('AddProjectImagesComponent', () => {
  let component: AddProjectImagesComponent;
  let fixture: ComponentFixture<AddProjectImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
