import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-feedback',
  templateUrl: './login-feedback.component.html',
  styleUrls: ['./login-feedback.component.css']
})
export class LoginFeedbackComponent implements OnInit {

  @Input() data = {
    userName: 'testUser',
    userPass: 'testPass'
  };

  constructor() { }

  ngOnInit() {
  }

}
