import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from "@angular/router";

import { RegistrationComponent } from "./registration/registration.component";
import { OnlineTestComponent } from './online-test/online-test.component';
import { ResultComponent } from './result/result.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  declarations: [
    AppComponent,
    RegistrationComponent,
    OnlineTestComponent,
    ResultComponent,

  ],
  providers: [],

  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
