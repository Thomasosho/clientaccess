import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertSkillComponent } from './expert-skill.component';

describe('ExpertSkillComponent', () => {
  let component: ExpertSkillComponent;
  let fixture: ComponentFixture<ExpertSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpertSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
