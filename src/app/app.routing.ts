import { Routes, RouterModule } from '@angular/router';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SectionListComponent } from './section-list/section-list.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizTakerComponent } from './quiz-taker/quiz-taker.component';
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
  { path: '**', component: WhiteboardComponent } // last
];
export const routing = RouterModule.forRoot(appRoutes);
