import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { PersonData } from '../person-data';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  personIdAnyWorks:PersonData[]=[];
  personData:any;
  imageURL:string='https://image.tmdb.org/t/p/w500';
  constructor(public _MoviesService:MoviesService) {
    _MoviesService.getTrendingPerson().subscribe({
      next:(data)=>{this.personData=data.results;this.getData(data.results)},
      error:(error)=>console.log(error)
    })
  }
  getData(data:any)
  {
    for (let x = 0; x < data.length; x++) {
        this.personIdAnyWorks.push({
          id:data[x].id,
          known_for:data[x].known_for
        });
    }
    this._MoviesService.fillPersonData(this.personIdAnyWorks);
  }
  ngOnInit(): void {
  }
}
