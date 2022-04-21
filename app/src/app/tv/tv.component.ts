import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  isLoading:boolean=false;
  imageURL:string='https://image.tmdb.org/t/p/w500';
  tvData:any;
  constructor(public _MoviesService:MoviesService) {
    _MoviesService.getTrendingTv().subscribe({
      next:(data)=>{this.tvData=data;this.isLoading=true},
      error:(err)=>console.log(err)
    })
    
  }
  ngOnInit(): void {
  }

}