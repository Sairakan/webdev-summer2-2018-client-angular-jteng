import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleChoiceSubmissionComponent } from './multiple-choice-submission.component';

describe('MultipleChoiceSubmissionComponent', () => {
  let component: MultipleChoiceSubmissionComponent;
  let fixture: ComponentFixture<MultipleChoiceSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultipleChoiceSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleChoiceSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
