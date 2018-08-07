import { Injectable } from "../../../node_modules/@angular/core";

import { HOST } from './const-url';

@Injectable()
export class WidgetServiceClient {
  findWidgetsForLesson(tId) {
    return fetch(HOST + '/api/topic/' + tId + '/widget')
      .then(response => response.json());
  }
}
