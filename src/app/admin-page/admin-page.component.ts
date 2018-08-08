import { Component, OnInit } from '@angular/core';
import { CourseServiceClient } from '../services/course.service.client';
import { Course } from '../models/course.model.client';
import { SectionServiceClient } from '../services/section.service.client';
import { UserServiceClient } from '../services/user.service.client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private userService: UserServiceClient,
    private courseService: CourseServiceClient,
    private sectionService: SectionServiceClient,
    private router: Router) { }

  courses: Course[] = [];
  selectedCourse: Course;
  sections = [];

  sectionName = '';
  seats = '';

  selectCourse(course) {
    this.selectedCourse = course;
    this.sectionService.findSectionsForCourse(course.id)
      .then(sections => {
        this.sections = sections;
      });
  }

  createSection(sectionName, seats) {
    if (sectionName === '') {
      sectionName = this.selectedCourse.title + ' ' + 'Section ' + (this.sections.length + 1);
    }
    if (seats === '') {
      seats = 20;
    }
    this.sectionService.createSection(this.selectedCourse.id, sectionName, seats)
      .then(() => {
        this.selectCourse(this.selectedCourse);
      });
  }

  deleteSection(section) {
    this.sectionService.deleteSection(section._id)
      .then(() => {
        this.selectCourse(this.selectedCourse);
      });
  }

  ngOnInit() {
    this.userService.profile()
      .then(user => {
        if (!user || !user.admin) {
          alert('please log in as an administrator');
          this.router.navigate(['home']);
        } else {
          this.courseService.findAllCourses()
            .then(courses => this.courses = courses);
        }
      });
  }

}
