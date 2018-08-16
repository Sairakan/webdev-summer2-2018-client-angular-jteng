import { Routes, RouterModule } from '@angular/router';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SectionListComponent } from './section-list/section-list.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { QuizListComponent } from './quiz/quiz-list/quiz-list.component';
import { QuizTakerComponent } from './quiz/quiz-taker/quiz-taker.component';
import { SubmissionListComponent } from './submission/submission-list/submission-list.component';
import { SubmissionViewerComponent } from './submission/submission-viewer/submission-viewer.component';
const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: WhiteboardComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'course/:courseId/section', component: SectionListComponent },
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent },
  { path: 'quizzes', component: QuizListComponent },
  { path: 'quiz/:quizId', component: QuizTakerComponent },
  { path: 'quiz/:quizId/submissions', component: SubmissionListComponent },
  { path: 'quiz/:quizId/submission/:submissionId', component: SubmissionViewerComponent },
  { path: '**', component: WhiteboardComponent } // last
];
export const routing = RouterModule.forRoot(appRoutes);
