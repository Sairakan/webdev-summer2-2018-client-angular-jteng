import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillBlanksSubmissionComponent } from './fill-blanks-submission.component';

describe('FillBlanksSubmissionComponent', () => {
  let component: FillBlanksSubmissionComponent;
  let fixture: ComponentFixture<FillBlanksSubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillBlanksSubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillBlanksSubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
