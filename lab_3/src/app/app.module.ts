import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import {Print_values} from "./print_values";
import { AppRoutingModule } from './app-routing.module';

import {NgServe} from "./Serve/NgServe";
// import { AppComponent } from './app.component';
// import {AppComponentMain} from "./app.component-main";
import {FormsModule} from "@angular/forms"
import {MyParser} from "./parser/parser";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    // AppComponent,
    // AppComponentMain,
    // Print_values,
    MyParser
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NgServe],
  bootstrap: [MyParser ]
})
export class AppModule { }
