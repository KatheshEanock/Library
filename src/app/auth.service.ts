import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from './data.moduel';


 export interface AuthData{
  idToken	:string,
  email	:string,
  refreshToken	:string,
  expiresIn	:string,
  localId: string,
  registered?:boolean
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }

  storeData(email,password){

    return this.http.post<AuthData>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA9fT1VByD4i_EelNSwxMK6V5_bocKuILc",
    {email:email,
    password:password,
    returnSecureToken:true
  })
  }
  login(email,password){
    return this.http.post<AuthData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9fT1VByD4i_EelNSwxMK6V5_bocKuILc',{
      email:email,
      password:password,
      returnSecureToken:true
     })
  }

  forgetPassword(email){
   return  this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyA9fT1VByD4i_EelNSwxMK6V5_bocKuILc",{
    idToken: null, // Pass the user's ID token if available
    email: email,
    returnSecureToken: true,
    requestType: 'PASSWORD_RESET'
     })
  }
}
