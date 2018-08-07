import { Injectable } from "../../../node_modules/@angular/core";

import { HOST } from './const-url';

@Injectable()
export class ModuleServiceClient {
  MODULE_URL = HOST + '/api/course/COURSE_ID/module';
  findModulesForCourse(courseId) {
    return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }
}
