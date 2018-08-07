import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css']
})
export class WhiteboardComponent implements OnInit {

  constructor(private userService: UserServiceClient) { }

  user = null;

  ngOnInit() {
    this.userService
      .profile()
      .then(user => {
        this.user = user;
      });
  }

}
