import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent implements OnInit {
  isLoading:boolean=false;
  imageURL:string='https://image.tmdb.org/t/p/w500';
  id:any;
  tvDetails:any;
  trendTv:any;
  constructor(public _MoviesService:MoviesService,public _ActivatedRoute:ActivatedRoute) {
    _MoviesService.getTrendingTv().subscribe({
      next:(data)=>this.trendTv=data.results,
      error:(err)=>console.log(err)
    })
    this.id=_ActivatedRoute.snapshot.paramMap.get('id');
    _MoviesService.getgTvDetails(this.id).subscribe({
      next:(data)=>{this.tvDetails=data;this.isLoading=true},
      error:(err)=>console.log(err)
    })
  }

  ngOnInit(): void {
  }

}
