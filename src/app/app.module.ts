import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { SingleDeploymentComponent } from './single-deployment/single-deployment.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    SingleDeploymentComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AppService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
