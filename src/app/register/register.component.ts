import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserServiceClient } from "../services/user.service.client";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  usernameTaken = false;
  passwordNoMatch = false;

  constructor(private router: Router,
    private userService: UserServiceClient) { }

  register(username, password, password2) {
    if (password != password2) {
      this.passwordNoMatch = true;
    } else {
      this.userService.findUserByUsername(username)
        .then(user => {
          if (user) {
            this.usernameTaken = true;
          } else {
            this.userService.register(username, password)
              .then(() => {
                this.router.navigate(['profile']);
              })
          }
        });

    }
  }

  ngOnInit() {
  }

}
