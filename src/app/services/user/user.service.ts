import { Injectable } from '@angular/core';
import { IUser, IUserLogin } from 'src/app/interfaces/IUser';
import { demoStudent, demoUserList } from 'src/assets/mock/user.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedUser?: IUser;
  
  constructor() { }

  login(loginData : IUserLogin): boolean{
    let success : boolean = false;
    demoUserList.forEach( mockUser => {
      if(loginData.username === mockUser.username){
        if(loginData.password === mockUser.password){
          this.loggedUser = demoStudent;
          console.log("Loggind Sucessfully!")
          success = true;
        }
      }
    });
    return success;
  }

  getUser(): IUser | undefined{
    if(this.loggedUser){
      return this.loggedUser;
    }
    return undefined;
  }

}
