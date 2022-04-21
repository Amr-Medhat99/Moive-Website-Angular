import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MoivedetailsComponent } from './moivedetails/moivedetails.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesComponent } from './movies/movies.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { MoviewdetailsComponent } from './moviewdetails/moviewdetails.component';
import { LoginComponent } from './login/login.component';
import { TvComponent } from './tv/tv.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';
import { PersonComponent } from './person/person.component';
import { PersondetailsComponent } from './persondetails/persondetails.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoivedetailsComponent,
    NavbarComponent,
    MoviesComponent,
    RegisterComponent,
    MoviewdetailsComponent,
    LoginComponent,
    TvComponent,
    TvdetailsComponent,
    PersonComponent,
    PersondetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
