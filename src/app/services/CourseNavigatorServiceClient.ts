import { Injectable } from "@angular/core";


@Injectable()
export class CourseNavigatorServiceClient {
    findAllCourses() {
        return fetch('http://localhost:8080/api/course')
            .then(response => response.json());
    }
    findModulesForCourse(cId) {
        return fetch('http://localhost:8080/api/course/' + cId + '/module')
            .then(response => response.json());
    }
    findLessonsForModule(cId, mId) {
        return fetch('http://localhost:8080/api/course/'+cId+'/module/'+mId+'/lesson')
            .then(response => response.json());
    }
    findTopicsForLesson(cId, mId, lId) {
        return fetch('http://localhost:8080/api/course/'+cId+'/module/'+mId+'/lesson/'+lId+'/topic')
            .then(response => response.json());
    }
    findWidgetsForTopic(tId) {
        return fetch('http://localhost:8080/api/topic/'+tId+'/widget')
            .then(response => response.json());
    }
}