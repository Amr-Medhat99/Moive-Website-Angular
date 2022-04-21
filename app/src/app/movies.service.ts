import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import { PersonData } from './person-data';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient:HttpClient){}
  personIDAndWorks:PersonData[]=[];
  //get trending movie
  getTrendingMovies():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=9587eae5f5795224a8b358f914b59bbd');
  }
  //get movie details
  getgMoviesDetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9587eae5f5795224a8b358f914b59bbd`);
    }
  //get trending tv
  getTrendingTv():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=9587eae5f5795224a8b358f914b59bbd');
  }
  //get tv details
  getgTvDetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=9587eae5f5795224a8b358f914b59bbd`);
    }
  //get trending person
  getTrendingPerson():Observable<any>{
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/person/week?api_key=9587eae5f5795224a8b358f914b59bbd');
  }
  //get person details
  getgPersonDetails(id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=9587eae5f5795224a8b358f914b59bbd`);
    }
  fillPersonData(data:any)
  {
    this.personIDAndWorks=data;
  }
  returnSpecificPersonData(id:number)
  {
    for (let i = 0; i < this.personIDAndWorks.length; i++) {
      if (this.personIDAndWorks[i].id==id) {
        return this.personIDAndWorks[i].known_for;
      }
    }
    return `Error: NotFound`;
  }
}
