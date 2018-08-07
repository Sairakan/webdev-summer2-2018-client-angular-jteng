import { Injectable } from "../../../node_modules/@angular/core";

import { HOST } from './const-url';

@Injectable()
export class CourseServiceClient {
  COURSE_URL = HOST + '/api/course';
  findAllCourses() {
    return fetch(this.COURSE_URL)
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(this.COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }
}