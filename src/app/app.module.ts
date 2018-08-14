import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';

import { CourseGridComponent } from './course-grid/course-grid.component';

import { CourseServiceClient } from './services/course.service.client';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleServiceClient } from './services/module.service.client';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { LessonServiceClient } from './services/lesson.service.client';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import { TopicServiceClient } from './services/topic.service.client';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { WidgetServiceClient } from './services/widget.service.client';
import { LoginComponent } from './login/login.component';
import { UserServiceClient } from './services/user.service.client';
import { ProfileComponent } from './profile/profile.component';
import { SectionServiceClient } from './services/section.service.client';
import { RegisterComponent } from './register/register.component';
import { SectionListComponent } from './section-list/section-list.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizTakerComponent } from './quiz-taker/quiz-taker.component';
import { QuizServiceClient } from './services/quiz.service.client';
import { EssayQuestionComponent } from './essay-question/essay-question.component';
import { FillBlanksQuestionComponent } from './fill-blanks-question/fill-blanks-question.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';

@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    SectionListComponent,
    AdminPageComponent,
    QuizListComponent,
    QuizTakerComponent,
    EssayQuestionComponent,
    FillBlanksQuestionComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    TopicServiceClient,
    WidgetServiceClient,
    UserServiceClient,
    SectionServiceClient,
    QuizServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
