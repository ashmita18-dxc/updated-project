import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomeCookComponent } from './home-cook/home-cook.component';
import { IndianComponent } from './indian/indian.component';
import { ChineseComponent } from './chinese/chinese.component';
import { AddCatererComponent } from './add-caterer/add-caterer.component';
import { AddCookComponent } from './add-cook/add-cook.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'homeCook',component:HomeCookComponent},
  {path:'indian',component:IndianComponent},
  {path:'chinese',component:ChineseComponent},
  {path:'add-caterer',component:AddCatererComponent},
  {path:'homec',component:AddCookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
