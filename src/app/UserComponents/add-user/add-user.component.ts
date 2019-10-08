import { Component, OnInit } from '@angular/core';
import { UserFacade } from 'src/app/Core/user.facade';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userfacade: UserFacade) { }

  ngOnInit() {
  }

  // charOnly(event): boolean {
  //   debugger;
  //   const charCode = (event.which) ? event.which : event.keyCode;
  //   if ((charCode < 64 || charCode > 91) && (charCode < 96 || charCode > 123)) {
  //     return false;
  //   }
  //   return true;
  // }

  // numberOnly(event): boolean {
  //   const charCode = (event.which) ? event.which : event.keyCode;
  //   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
  //     return false;
  //   }
  //   return true;
  // }

}
