import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterArtisanComponent } from './register-artisan.component';

describe('RegisterArtisanComponent', () => {
  let component: RegisterArtisanComponent;
  let fixture: ComponentFixture<RegisterArtisanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterArtisanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterArtisanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
