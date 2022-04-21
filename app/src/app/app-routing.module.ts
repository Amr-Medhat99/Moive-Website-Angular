import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoivedetailsComponent } from './moivedetails/moivedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviewdetailsComponent } from './moviewdetails/moviewdetails.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PersonDetailsGuard } from './person-details.guard';
import { PersonDetails2Guard } from './person-details2.guard';
import { PersonComponent } from './person/person.component';
import { PersondetailsComponent } from './persondetails/persondetails.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';

const routes: Routes = [
  {path:'',redirectTo:'register',pathMatch:'full'},
  {path:'movie',canActivate:[AuthGuard],component:HomeComponent},
  {path:'tv',canActivate:[AuthGuard],component:TvComponent},
  {path:'moviedetails/:id',canActivate:[AuthGuard],component:MoivedetailsComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'tvdetails/:id',canActivate:[AuthGuard],component:TvdetailsComponent},
  {path:'person',canActivate:[AuthGuard],component:PersonComponent},
  {path:'persondetails/:id',canActivate:[AuthGuard],component:PersondetailsComponent},  
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }