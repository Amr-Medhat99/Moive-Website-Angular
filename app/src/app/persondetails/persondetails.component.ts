import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { PersonData } from '../person-data';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-persondetails',
  templateUrl: './persondetails.component.html',
  styleUrls: ['./persondetails.component.scss']
})
export class PersondetailsComponent implements OnInit {
  isLoading:boolean=false;
  personIDAndWorks:any;
  personId:any;
  personData:any;
  imageURL:string='https://image.tmdb.org/t/p/w500';
  constructor(public _MoviesService:MoviesService,public _ActivatedRoute:ActivatedRoute,public _AuthService:AuthService) {
    
    this.personId=_ActivatedRoute.snapshot.paramMap.get('id');
    _MoviesService.getgPersonDetails(this.personId).subscribe({
      next:(data)=>{
        this.personData=data;
        this.personIDAndWorks=_MoviesService.returnSpecificPersonData(this.personId);
        this.isLoading=true;
      },
      error:(err)=>console.log(err)
    })
  }

  ngOnInit(): void {
  }

}
