import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestContainerComponent } from './test-container/test.container';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: TestContainerComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
