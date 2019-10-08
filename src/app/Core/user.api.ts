import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserApi {
  apiUrl = 'http://localhost:57648/api/Test/';
  apiUrl1 = 'http://localhost:3000/fetchusers/';

  constructor(
    private http: HttpClient,
    private router: Router) { }

  fetchusers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl1 );
  }
  // getAllUser(): Observable<User[]> {
  //   return this.http.get<User[]>(this.apiUrl + 'SelectUser');
  // }

  // addUser(user: User) {
  //   return this.http.post(this.apiUrl + 'AddUser', user);
  // }

  // getUser(id) {
  //   return this.http.get(this.apiUrl + 'SelectUserById/' + id);
  // }

  // updateUser(id, user: User) {
  //   return this.http.put(this.apiUrl + 'UpdateUser/' + id, user);
  // }

  // deleteUser(id) {
  //   return this.http.delete(this.apiUrl + 'DeleteUser/' + id);
  // }
}
