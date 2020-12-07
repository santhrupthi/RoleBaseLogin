import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';
import {IUserToken} from '../model/user_Token.interface'
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _token: string = "userData";
  constructor(private http : HttpClient) { }
  private readonly _baseUrl:string = "http://thelumberreport.com/api/Accounts";
  getLoggedInUserData(): IUserToken {
    //Get it from the local storage.
    if (window.localStorage.getItem(this._token)) {
      return JSON.parse(window.localStorage.getItem(this._token)) as IUserToken;
    }
    return null;
  }
  getUserToken(email: string, password: string): Observable<IUserToken> {
   // let body = `userName=${email}&password=${password}&grant_type=password`;
    // const details = {
    //   email: "${email}" ,password : "${password}"
    //  }
    //var body = JSON.stringify(`email:${email},password:${password}`);
     const headers = new HttpHeaders();
     headers.set('Content-Type', 'application/json; charset=utf-8');
     //console.log('this is body',body);
     
     console.log('this is header',headers);
    return this.http
      .post<IUserToken>(`${this._baseUrl}/SignIn`,{"email":`${email}`,"password":`${password}`} ,{headers})
      .pipe(
      map((data:any)=>({
        userName:data.userName,
        accessToken:data.accessToken,
        roles  :data.roles
      } as IUserToken))
        
      );
  }
  
  doLogin(userData: IUserToken) {
    window.localStorage.setItem(this._token, JSON.stringify(userData));
  }
  doLogout() {
    window.localStorage.clear();
  }
  lagout(user){
      return this.http.delete<IUserToken>(
        `${this._baseUrl}/Logout/${user}`
      )
  }
  }
  
