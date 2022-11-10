import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({
    username  : new FormControl('', Validators.required),
    password  : new FormControl('', Validators.required)
  });

  isLoggingIn: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(): void{
    this.isLoggingIn = true;
    console.log(this.loginForm.value);
  }

}
