import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {routingModule} from '../app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BookComponent } from './book/book.component';
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
import { ResultComponent } from './result/result.component';
import {NodeConsumeService} from "./node-consume.service";



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    ViewComponent,
    SearchComponent,
    ResultComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    routingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [NodeConsumeService],
  bootstrap: [AppComponent]
})
export class AppModule { }