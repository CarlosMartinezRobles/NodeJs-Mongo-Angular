import { Iuser, IuserSignIn } from './../models/iuser';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public endpoint: string = 'http://localhost:3000/api'; //to conect our server in back.
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  public currentUser: Object = {}; //this is the function that we use to define our response of SignIn (Token +_Id +expires) . 

  constructor( private http: HttpClient, public router: Router) {/*empty*/ }

  public register (user:Iuser){ 
    const api= `${this.endpoint}/register`;
    return this.http.post(api, user).pipe(
    catchError(this.handleError)
    ) 
  };
  
  public  signIn( userSignin: IuserSignIn) {
    return this.http.post<any>(`$this.endpoint}//register`, userSignin).subscribe((res) => {
      localStorage.setItem('access_token', res.token)
      this.currentUser = res;	
    })
  }
  getToken(): string | null {
    return localStorage.getItem('access_token');
  }
  public doLogout() {//to secure that be a token.
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['home']);
    }
  } 
  public isLoggedIn(): boolean {
    return localStorage.getItem('access_token') !=null ? true : false;
  }
  getUserProfile(id: string): Observable<any> {
    let api = `${this.endpoint}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  }

   //  Error function;
  private handleError(error: HttpErrorResponse) {
  let msg = '';
    if (error.error instanceof ErrorEvent) {
    // client-side error
      msg = error.error.message;
    } else {
    // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
} 




//40:30 seg segundo video 