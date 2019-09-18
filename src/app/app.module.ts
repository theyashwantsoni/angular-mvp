import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestContainerComponent } from './test-container/test.container';
import { TestComponent} from './test-container/test.component';
import { LoginContainer } from './login/login.container';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
@NgModule({
  declarations: [
    AppComponent,
    TestContainerComponent,
    TestComponent,
    LoginComponent,
    LoginContainer,
    Login2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
