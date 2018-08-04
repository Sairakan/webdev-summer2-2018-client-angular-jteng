export class WidgetServiceClient {
  findWidgetsForLesson(tId) {
    return fetch('http://localhost:8080/api/topic/' + tId + '/widget')
      .then(response => response.json());
  }
}
