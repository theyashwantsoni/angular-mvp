import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestContainerComponent } from './test-container/test.container';
import { LoginContainer } from './login/login.container';
import { Login2Component } from './login2/login2.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: TestContainerComponent },
  { path: 'login', component: Login2Component },
  { path: '**', component:Login2Component}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
