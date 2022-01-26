import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private userData = new BehaviorSubject<any>({});
  public data = this.userData.asObservable();

  constructor(private router: Router) { }

  handle(token: any) {
    this.set(token);
  }

  set(token: any) {
    localStorage.setItem('token', token);
  }
  sendUserData(data: any) {
    this.userData.next(data);
  }

  getUserData(): Observable<any> {
    return this.userData.asObservable();
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  // isValid() {
  //   try {
  //   const token = this.get();
  //   console.log(token)
  //   if (token) {
  //       // this.router.navigate(['/login']);
  //       return true;
  //       // , { queryParams: { returnUrl: state.url }}
  //     } else {
  //       // this.router.navigate(['/']);
  //       return false;
  //     }
  //   } catch (err) {
  //     this.router.navigate(['/login']);
  //   }
  // }

  // loggedIn() {
  //   return this.isValid();
  // }
}
