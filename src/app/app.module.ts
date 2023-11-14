import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectComponent } from './components/project/project.component';
import { ContactComponent } from './components/contact/contact.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ProjectComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
