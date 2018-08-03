import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';

import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { CourseGridComponent } from './course-grid/course-grid.component';

import { CourseNavigatorServiceClient } from './services/CourseNavigatorServiceClient';
import { CourseServiceClient } from './services/course.service.client';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { ModuleServiceClient } from './services/module.service.client';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { LessonServiceClient } from './services/lesson.service.client';

@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent,
    CourseNavigatorComponent,
    CourseGridComponent,
    CourseViewerComponent,
    ModuleListComponent,
    LessonTabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseNavigatorServiceClient,
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
