import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent {
  constructor(private authSer:AuthService){}
  onFormSubmit(f:NgForm){
    const  email= f.value.email;
    //const conformpassword=f.value.conformpassword;
     this.authSer.forgetPassword(email).subscribe((res)=>{
      console.log(res);
       alert('password reset link has been sent your mail')
     })
     f.form.reset()
  }
}
