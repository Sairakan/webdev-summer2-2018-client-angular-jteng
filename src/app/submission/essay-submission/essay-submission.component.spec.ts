import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssaySubmissionComponent } from './essay-submission.component';

describe('EssaySubmissionComponent', () => {
  let component: EssaySubmissionComponent;
  let fixture: ComponentFixture<EssaySubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssaySubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssaySubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
