import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenderCategoryComponent } from './tender-category.component';

describe('TenderCategoryComponent', () => {
  let component: TenderCategoryComponent;
  let fixture: ComponentFixture<TenderCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenderCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenderCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
