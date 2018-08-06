export class UserServiceClient {

  findUserById(userId) {
    return fetch('http://localhost:4000/api/user/' + userId)
      .then(response => response.json());
  }

  findUserByUsername(username) {
    return fetch('http://localhost:4000/api/register/'+username)
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
    return fetch('http://localhost:4000/api/login', {
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
    return fetch('http://localhost:4000/api/logout', {
      method: 'post',
      credentials: 'include'
    })
      .then(response => response.json());
  }

  update(user) {
    return fetch('http://localhost:4000/api/user', {
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
    return fetch('http://localhost:4000/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      })
      .then(response => response.json());
  }

  register(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('http://localhost:4000/api/register', {
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
