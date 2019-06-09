import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import {HomepageComponent} from './homepage/homepage.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashComponent } from './userdash/userdash.component';
import { AdmindashComponent } from './admindash/admindash.component';
import { StockmanageComponent } from './stockmanage/stockmanage.component';
import { ReportComponent } from './report/report.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const router: Routes = [
  { path: '',   redirectTo: '/homepage', pathMatch: 'full' },
  {path:'homepage',component:HomepageComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admindash',component:AdmindashComponent},
  {path:'userdash',component:UserdashComponent},
  {path:'stock',component:StockmanageComponent},
  {path:'report',component:ReportComponent},
  {path:'sidebar',component:SidebarComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
