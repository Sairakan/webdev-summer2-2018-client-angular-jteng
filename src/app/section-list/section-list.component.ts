import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SectionServiceClient } from '../services/section.service.client';
import { CourseServiceClient } from '../services/course.service.client';
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private userService: UserServiceClient,
    private sectionService: SectionServiceClient,
    private courseService: CourseServiceClient,
    private router: Router,
    private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']));
  }

  user = {
    _id: ''
  };
  sectionName = '';
  seats = '';
  courseId = '';
  courseName = '';
  sections = [];
  loadSections(courseId) {
    this.courseId = courseId;
    this.sectionService.findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  createSection(sectionName, seats) {
    if (sectionName === '') {
      sectionName = this.courseName + ' ' + 'Section ' + (this.sections.length + 1);
    }
    if (seats === '') {
      seats = 20;
    }
    this.sectionService.createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  deleteSection(section) {
    this.sectionService.deleteSection(section._id)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  enroll(section) {
    if (this.user) {
      this.sectionService.enrollStudentInSection(this.user._id, section._id)
        .then(response => {
          if (!response) {
            alert('section is full');
          } else if (response === 'already enrolled') {
            alert('already enrolled in section');
          } else {
            this.router.navigate(['profile']);
          }
        });
    } else {
      alert('please log in');
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    this.userService.profile().then(user => {
      this.user = user;
    });
    this.courseService.findCourseById(this.courseId)
      .then(course => {
        this.courseName = course.title;
      });
  }

}
