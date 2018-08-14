import { Injectable } from '@angular/core';

import { HOST } from './const-url';

@Injectable()
export class TopicServiceClient {
    findTopicsForLesson(cId, mId, lId) {
        return fetch(HOST + '/api/course/' + cId + '/module/' + mId + '/lesson/' + lId + '/topic')
            .then(response => response.json());
    }
}
