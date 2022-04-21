import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-moivedetails',
  templateUrl: './moivedetails.component.html',
  styleUrls: ['./moivedetails.component.scss']
})
export class MoivedetailsComponent implements OnInit {
  movieId:any;
  movieDetails:any;
  topTenMovies:Array<any>=[];
  imageURL:string='https://image.tmdb.org/t/p/w500';
  isLoading:boolean=false;
  constructor(public _ActivateRoute:ActivatedRoute,public _MoviewServices:MoviesService) {
    this.movieId=_ActivateRoute.snapshot.paramMap.get('id');
    _MoviewServices.getgMoviesDetails(this.movieId).subscribe({
      next:(data)=>{
        this.movieDetails=data
        this.isLoading=true
      },
      error:(error)=>console.log(error)
    })

    _MoviewServices.getTrendingMovies().subscribe({
      next:(data)=>{
        for (let index = 0; index < 10; index++) {
          this.topTenMovies.push(data.results[index]);
        }
      },
      error:(error)=>console.log(error)
    })
  }
  ngOnInit(): void {
  }

}
