import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public _AuthService:AuthService,public _Router:Router) { }

  loginForm:FormGroup=new FormGroup({
    'Email':new FormControl(null,[Validators.required,Validators.email]),
    'Password':new FormControl(null,Validators.required)
  });

  loginFormData(data:any){
    if (data.valid==true) {
      this._AuthService.login(data.value).subscribe({
        next:(data)=>{
          this._AuthService.UserToken(data.message);
          this._Router.navigate(['/movie'])
        },
        error:(error)=>{
          let err=document.getElementById('err')
          err!.innerHTML=error.error.message
      }
      })
    }
    else{
      console.log('Error');
    }
  }
  ngOnInit(): void {
  }

}