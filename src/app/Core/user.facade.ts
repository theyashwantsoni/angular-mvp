import { Injectable } from '@angular/core';
import { UserApi } from './user.api';
import { UserState } from './user.state';
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserFacade {

  constructor(
    private userapi: UserApi,
    private userstate: UserState
  ) { }

  getAllUser() {
    return this.userapi.fetchusers().subscribe(userlist => {
      // console.log(userlist)
      this.userstate.setusers(userlist);
    });
  }
}
