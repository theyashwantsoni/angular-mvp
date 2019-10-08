import { Component, OnInit, Input } from '@angular/core';
import { UserFacade } from '../../Core/user.facade';
import { UserState } from '../../Core/user.state';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  list: any =[];
  constructor(
    private userfacade: UserFacade,
    private userstate: UserState
  ) { }

  ngOnInit() {
    this.userfacade.getAllUser();
    this.userstate.getusers().subscribe(
          data => {
              console.log(this.list);  
          },
          error => {
              console.log(error);
          }
    );
    // console.log(this.list)
    
  }

}
