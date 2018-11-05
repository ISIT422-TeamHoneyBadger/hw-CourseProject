import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  readonly postURL = 'https://honeybadgersservice.azurewebsites.net/Login/CreateAccount/';

  data = {
    userName: '',
    userPass: ''
  };

  constructor() { }

  createUP() {
    fetch(this.postURL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(this.data),
      })
      .then((x) => (x.json())
      .then((data) => {
        console.log('User Creation Succeeded');
        console.log(JSON.stringify(this.data));
      })
      .catch((err) => {
        console.log('User Creation Failed');
        console.log(err);
      }));
  }

  ngOnInit() {
  }

}
