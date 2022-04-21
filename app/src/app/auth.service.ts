import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { UserToken } from './UserToke';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  x:any=null;
  constructor( public _HttpClient:HttpClient) { }
  userToken=new BehaviorSubject(this.x);
  register(data:any):Observable<any>
  {
    return this._HttpClient.post("https://localhost:44328/api/auth/Register",data);
  }
  login(data:any):Observable<any>
  {
    return this._HttpClient.post("https://localhost:44328/api/auth/Login",data);
  }
  UserToken(token:any)
  {
    let user=new UserToken(token);
    this.userToken.next(user);
  }
}
