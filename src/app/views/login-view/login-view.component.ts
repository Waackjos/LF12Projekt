import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({
    username  : new FormControl('', Validators.required),
    password  : new FormControl('', Validators.required)
  });

  isLoggingIn       : boolean = false;
  wrongCredentials  : boolean = false;

  constructor(
    private userService : UserService
  ) { }

  ngOnInit(): void {
  }

  async onLogin(): Promise<void>{
    this.isLoggingIn = true;
    this.wrongCredentials = await !this.userService.login(this.loginForm.value);
    this.isLoggingIn = false;
  }

  resetErrors(): void{
    this.wrongCredentials = false;
  }

}
