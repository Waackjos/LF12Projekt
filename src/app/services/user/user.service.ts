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
  * Fake API-Call um login zu simulieren.
  * Pro attempt werden 10ms verbraucht.
  * @param loginData Nutzername und Password als IUserLogin objekt
  * @returns Erfolgsstatus als boolean
  */
  async login(loginData: IUserLogin): Promise<boolean>{
    let result : Promise<boolean> = new Promise( resolve => {
        // Timeout stellt die Latenz dar.
        setTimeout( () => {

          for (const mockUser of demoUserList){
            if(loginData.username === mockUser.username){
              if(loginData.password === mockUser.password){
                this.loggedUser = demoStudent;
                resolve(true);
                break;
              }
            }
          }
          resolve(false);

        }, 1000);
    });
    
    return result;
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
