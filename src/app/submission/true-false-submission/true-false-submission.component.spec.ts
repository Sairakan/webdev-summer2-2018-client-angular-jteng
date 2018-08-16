import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueFalseSubmissionComponent } from './true-false-submission.component';

describe('TrueFalseSubmissionComponent', () => {
  let component: TrueFalseSubmissionComponent;
  let fixture: ComponentFixture<TrueFalseSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrueFalseSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueFalseSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
