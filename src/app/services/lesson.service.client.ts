import { Injectable } from "../../../node_modules/@angular/core";

import { HOST } from './const-url';

@Injectable()
export class LessonServiceClient {
  findLessonsForModule(cId, mId) {
    return fetch(HOST + '/api/course/' + cId + '/module/' + mId + '/lesson')
      .then(response => response.json());
  }
}
