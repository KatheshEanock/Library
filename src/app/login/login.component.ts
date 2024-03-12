import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private authserv:AuthService,private router:Router){}
ngOnInit(): void {

}
  onFormSubmit(f:NgForm){
    console.log(f.value);
    const email= f.value.email;
    const password = f.value.password;

     this.authserv.login(email,password).subscribe((res)=>{
      console.log(res);
     this.router.navigate(['side-bar'])
     },error=>{
      console.log(error);

     })

    f.form.reset()

  }
}
