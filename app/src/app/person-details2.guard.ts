import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MoviesService } from './movies.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class PersonDetails2Guard implements CanActivate {
  constructor(public _MoviesService:MoviesService,public _Router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this._MoviesService.personIDAndWorks.length>0) {
        return true;
      }
      else{
        return this._Router.createUrlTree(['/person']);
      }
  }
  
}
