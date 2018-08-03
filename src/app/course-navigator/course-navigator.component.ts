import { Component, OnInit } from '@angular/core';
import { CourseNavigatorServiceClient } from '../services/CourseNavigatorServiceClient';


@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  courses = [];
  modules = [];
  lessons = [];
  topics = [];
  widgets = [];
  selectedCourse = { id: 0 };
  selectedModule = { id: 0 };
  selectedLesson = { id: 0 };
  selectedTopic = { id: 0 };

  constructor(private service: CourseNavigatorServiceClient) { }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => {
        this.courses = courses;
      })
  }

  selectCourse(course) {
    this.selectedCourse = course;
    this.service.findModulesForCourse(course.id)
      .then(modules => this.modules = modules);
  }

  selectModule(module) {
    this.selectedModule = module;
    this.service.findLessonsForModule(this.selectedCourse.id, module.id)
      .then(lessons => this.lessons = lessons);
  }

  selectLesson(lesson) {
    this.selectedLesson = lesson;
    this.service.findTopicsForLesson(this.selectedCourse.id, this.selectedModule.id, lesson.id)
      .then(topics => this.topics = topics);
  }

  selectTopic(topic) {
    this.selectedTopic = topic;
    this.service.findWidgetsForTopic(topic.id)
      .then(widgets => this.widgets = widgets);
  }
}
