import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  // Formgruppe für das Loginform
  loginForm : FormGroup = new FormGroup({
    username  : new FormControl('', Validators.required),
    password  : new FormControl('', Validators.required)
  });

  // State Variablen
  isLoggingIn       : boolean = false; // loading state fürs fetchen
  wrongCredentials  : boolean = false; // Error state bei falschen Logincredentials

  constructor(
    private userService : UserService,
    private router      : Router
  ) { }

  ngOnInit(): void {
  }

  /**
   * Führt den Login im service aus
   */  
  async onLogin(): Promise<void>{
    this.isLoggingIn = true;
    this.wrongCredentials = await !this.userService.login(this.loginForm.value)
    if(!this.wrongCredentials){
      this.router.navigate(['/dashboard']);
    }
    this.isLoggingIn = false;
  }

  resetErrors(): void{
    this.wrongCredentials = false;
  }

}
