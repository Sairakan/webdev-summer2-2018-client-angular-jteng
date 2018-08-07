import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from "../services/user.service.client";
import { Router } from "@angular/router";
import { SectionServiceClient } from "../services/section.service.client";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService: UserServiceClient,
    private sectionService: SectionServiceClient,
    private router: Router) { }

  user = {
    _id: '',
    username: '',
    firstName: '',
    lastName: '',
    email: ''
  };
  username;
  firstName;
  lastName;
  email;
  sections = [];

  populateSections() {
    this.sectionService
      .findSectionsForStudent(this.user._id)
      .then(sections => this.sections = sections);
  }

  update() {
    this.user.username = this.username;
    this.user.firstName = this.firstName;
    this.user.lastName = this.lastName;
    this.user.email = this.email;
    this.userService.update(this.user)
      .then();
  }

  logout() {
    this.userService
      .logout();

  }

  unenroll(enrollment) {
    this.sectionService.unenrollStudentFromSection(enrollment)
      .then(() => {
        this.populateSections();
      });
  }

  ngOnInit() {
    this.userService
      .profile()
      .then(user => {
        if (user) {
          this.user = user;
          this.username = user.username;
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.email = user.email;

          this.populateSections();
        } else {
          alert('Please log in');
          this.router.navigate(['home']);
        }
      });
  }

}
