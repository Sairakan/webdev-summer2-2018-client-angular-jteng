export class LessonServiceClient {
  findLessonsForModule(cId, mId) {
    return fetch('http://localhost:8080/api/course/' + cId + '/module/' + mId + '/lesson')
      .then(response => response.json());
  }
}
