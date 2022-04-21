import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm:FormGroup=new FormGroup({
    'UserName':new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
    'Email':new FormControl(null,[Validators.required,Validators.email]),
    'Password':new FormControl(null,Validators.required),
    'ConfirmPassword':new FormControl(null,Validators.required),
  });

  registerFormData(data:any){
    if (data.valid==true) {
      this._AuthService.register(data.value).subscribe({
        next:(data)=>this._Router.navigate(['/login']),
        error:(error)=>console.log(error)
      })
    }
    else{
      console.log('Error يا حمار');
    }
  }

  constructor(public _AuthService:AuthService,public _Router:Router) { }

  ngOnInit(): void {
  }

}
