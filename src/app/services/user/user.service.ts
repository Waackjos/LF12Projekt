import { Injectable } from '@angular/core';
import { IUser } from 'src/app/interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedUser?: IUser;
  
  constructor() { }

  login(): void{

  }

  getUser(): IUser | undefined{
    if(this.loggedUser){
      return this.loggedUser;
    }
    return undefined;
  }

}
