import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isFill:boolean=false;
  constructor(public _AuthService:AuthService,public _Router:Router) {
    this._AuthService.userToken.subscribe({
      next:(data)=>{
        if(data!=null)
        {
          this.isFill=true
        }
      },error:(error)=>this.isFill=false
      
    })
      
  }
  sinOut()
  {
    this.isFill=false;
    this._AuthService.userToken.next(null);
    this._Router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

}
