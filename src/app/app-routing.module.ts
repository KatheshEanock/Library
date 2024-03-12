import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DasktopComponent } from './dasktop/dasktop.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SettingComponent } from './setting/setting.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signup',component:SigninComponent},
  {path:'login',component:LoginComponent},
  {path:'forgetpassword',component:ForgetpasswordComponent},
  {path:'side-bar',component:SideBarComponent,children:[
    {path:':id',component:DasktopComponent},
    {path:':id/setting',component:SettingComponent},
    {path:':id/about',component:AboutComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
