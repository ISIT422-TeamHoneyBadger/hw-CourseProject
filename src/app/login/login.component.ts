import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  readonly postURL = "https://honeybadgersservice.azurewebsites.net/Login/GetMyInfo/";

  data = {
    userName: '',
    userPass: ''
  };

  loginUP() {
    fetch(this.postURL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(this.data),
      }).then((x) => x.json())
      .then((data) => {
        console.log('Login Succeeded');
        console.log(JSON.stringify(data));
      })
      .catch((err) => {
        console.log('Login Failed');
        console.log(err);
      });
  }

  togglePasswordVisibility() {
    let input: HTMLButtonElement = <HTMLButtonElement>document.getElementById("input-password");
    let visToggle: HTMLButtonElement = <HTMLButtonElement>document.getElementById("input-password-vis-toggle");
    
    if (input.type === "password") {
      input.type = "text";

      visToggle.innerHTML = "visibility";
    } else {
      input.type = "password";

      visToggle.innerHTML = "visibility_off";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
