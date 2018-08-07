import { Injectable } from "../../../node_modules/@angular/core";

import { NODE } from './const-url';

@Injectable()
export class SectionServiceClient {

  SECTION_URL = NODE + '/api/course/COURSEID/section';

  findSectionsForStudent(studentId) {
    const url = NODE + '/api/student/' + studentId + '/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(userId, sectionId) {
    const url = NODE + '/api/student/' + userId + '/section/' + sectionId;
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    }).then(response => response.text());
  }

  unenrollStudentFromSection(enrollment) {
    const studentId = enrollment.student;
    const sectionId = enrollment.section._id;
    return fetch(NODE + '/api/student/' + studentId + '/section/' + sectionId, {
      method: 'delete',
      credentials: 'include'
    })
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = { courseId, name, seats };
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection(sectionId) {
    return fetch(NODE + '/api/section/' + sectionId, {
      method: 'delete'
    });
  }
}
