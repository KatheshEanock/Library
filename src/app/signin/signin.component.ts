import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isLoading=false;
  error:string=null;
  constructor(private http:AuthService,private router:Router){}
  ngOnInit(): void {

  }

  onFormSubmit(f:NgForm){
    // if(f.invalid){
    //   return;
    // }
    const email= f.value.email;
    const password= f.value.password;
        this.isLoading=true

           this.http.storeData(email,password).subscribe((res)=>{
            console.log(res);
            this.isLoading=false
            this.router.navigate(['/login'])
           },(err)=>{
            console.log(err);
             switch(err.error.error.message){
              case "EMAIL_EXISTS":
              this.error="this email alredy exits"
              break;
              case "WEAK_PASSWORD":
                this.error="Password should be atleast 6  characters long";
               break;
               default :
                 this.error="Something went wrong , please try again after some time."

             }
            
            this.isLoading=false
          });
             f.form.reset()

  }


}
