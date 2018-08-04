export class TopicServiceClient {
    findTopicsForLesson(cId, mId, lId) {
        return fetch('http://localhost:8080/api/course/' + cId + '/module/' + mId + '/lesson/' + lId + '/topic')
            .then(response => response.json());
    }
}
