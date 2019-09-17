import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestContainerComponent } from './test-container/test.container';
import { TestComponent} from './test-container/test.component';
import { Test1Component } from './test1/test1.component';
@NgModule({
  declarations: [
    AppComponent,
    TestContainerComponent,
    TestComponent,
    Test1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
