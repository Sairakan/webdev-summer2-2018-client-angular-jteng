import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TopicServiceClient } from "../services/topic.service.client";

@Component({
  selector: 'app-topic-pills',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {
  constructor(private service: TopicServiceClient,
    private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  cId;
  mId;
  lId;
  tId;
  topic = {};
  topics = [];

  setParams(params) {
    this.cId = params['courseId'];
    this.mId = params['moduleId'];
    this.lId = params['lessonId'];
    this.tId = params['topicId'];
    this.loadLessons(this.cId, this.mId, this.lId);
  }

  loadLessons(cId, mId, lId) {
    this.cId = cId;
    this.mId = mId;
    this.lId = lId;
    if (lId)
      this.service.findTopicsForLesson(cId, mId, lId)
        .then(topics => {
          this.topics = topics;
        });
  }

  selectTopic = (topic) => {
    this.topic = topic;
  }

  ngOnInit() {
  }
}
