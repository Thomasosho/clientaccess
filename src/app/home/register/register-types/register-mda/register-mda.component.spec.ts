import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMdaComponent } from './register-mda.component';

describe('RegisterMdaComponent', () => {
  let component: RegisterMdaComponent;
  let fixture: ComponentFixture<RegisterMdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterMdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
