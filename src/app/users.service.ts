import { Injectable } from '@angular/core';


export interface Users{
  userName:string,
  password:string,
  subject:string
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: Users[] = [
    { userName: 'admin', password: '1234',subject:'secretary' },
    { userName: 'user1', password: 'pass1' ,subject:'teacher' }
  ];
 

  getUser(userName: string, password: string): Users | undefined {
    
    return this.users.find(u => u.userName === userName && u.password === password);
  }
  
  constructor() { }
}
