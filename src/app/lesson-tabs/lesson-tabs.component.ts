import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { LessonServiceClient } from "../services/lesson.service.client";

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  constructor(private service: LessonServiceClient,
    private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  cId;
  mId;
  lId;
  lesson = {};
  lessons = [];

  setParams(params) {
    this.cId = params['courseId'];
    this.mId = params['moduleId'];
    this.lId = params['lessonId'];
    this.loadLessons(this.cId, this.mId);
  }

  loadLessons(cId, mId) {
    this.cId = cId;
    this.mId = mId;
    if (mId)
      this.service.findLessonsForModule(cId, mId)
        .then(lessons => {
          this.lessons = lessons;
        });
  }

  selectLesson = (lesson) => {
    this.lesson = lesson;
  }

  ngOnInit() {
  }

}
