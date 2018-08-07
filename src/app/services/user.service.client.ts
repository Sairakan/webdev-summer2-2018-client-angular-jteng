import { Injectable } from "../../../node_modules/@angular/core";

import { NODE } from './const-url'

@Injectable()
export class UserServiceClient {

  findUserById(userId) {
    return fetch(NODE + '/api/user/' + userId)
      .then(response => response.json());
  }

  findUserByUsername(username) {
    return fetch(NODE + '/api/register/' + username)
      .then(response => response.text())
      .then(text => {
        if (text == '') return null;
        else return JSON.parse(text);
      });
  }

  login(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch(NODE + '/api/login', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json());
  }

  logout() {
    return fetch(NODE + '/api/logout', {
      method: 'post',
      credentials: 'include'
    });
  }

  update(user) {
    return fetch(NODE + '/api/profile', {
      method: 'put',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json());
  }

  profile() {
    return fetch(NODE + '/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.text())
      .then(text => (text ? JSON.parse(text) : null));
  }

  register(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch(NODE + '/api/register', {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(response => response.json());
  }
}
