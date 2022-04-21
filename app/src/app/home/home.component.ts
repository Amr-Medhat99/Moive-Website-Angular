import { Component, OnInit } from '@angular/core';
import { MoviesService} from '../movies.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moiveData:Array<any>=[];
  imageURL:string='https://image.tmdb.org/t/p/w500';
  constructor(public _MoviesService:MoviesService,public _AuthService:AuthService,public _Router:Router) 
  {
    _MoviesService.getTrendingMovies().subscribe({
      next:(data)=>{
        this.moiveData=data.results
      },
      error:(error)=>console.log(error)
    })
  }

  ngOnInit(): void {
  }
}