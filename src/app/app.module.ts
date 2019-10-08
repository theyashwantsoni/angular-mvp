import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './UserComponents/user-list/user-list.component';
import { AddUserComponent } from './UserComponents/add-user/add-user.component';
import { UserDetailComponent } from './UserComponents/user-detail/user-detail.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'User', pathMatch: 'full' },
      { path: 'User', component: UserListComponent },
      { path: 'AddUser', component: AddUserComponent },
      // { path: 'AddStudent', component: AddStudentComponent },
      // { path: 'StudentDetail', component: ViewStudentComponent },
      // { path: 'StudentList', component: StudentListComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
