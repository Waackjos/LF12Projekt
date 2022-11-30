import { Injectable } from '@angular/core';
import { IUser, IUserLogin } from 'src/app/interfaces/IUser';
import { demoStudent, demoUserList } from 'src/assets/mock/user.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedUser?: IUser; // User Objekt
  
  constructor() { }

  /**
   * Request an die API (momentan noch MOCK) um mit credentials die UserDaten abzufragen
   * @param loginData logindaten mit denen der login versucht werden soll
   * @returns boolean mit erfolgsergebniss
   */
  login(loginData : IUserLogin): boolean{
    let success : boolean = false;
    demoUserList.forEach( mockUser => {
      if(loginData.username === mockUser.username){
        if(loginData.password === mockUser.password){
          this.loggedUser = demoStudent;
          success = true;
        }
      }
    });
    return success;
  }

  /**
   * Getter für Userdaten.
   * @returns User im IUser aufbau  
   */
  getUser(): IUser | undefined{
    if(this.loggedUser){
      return this.loggedUser;
    }
    return undefined;
  }

}
