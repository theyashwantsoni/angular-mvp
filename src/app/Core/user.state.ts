import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../Models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserState {
  public users$ = new BehaviorSubject<any[]>(null);
  constructor() { }

  setusers(user: any[]) {
    // console.log(this.users$);    
    this.users$.next(user);
  }
  getusers() {
    return this.users$.asObservable();
  }
}
