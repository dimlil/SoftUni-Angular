import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { apiURLProvider, myServiceProvider, MY_SERVICE } from './providers'

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    apiURLProvider,
    myServiceProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
