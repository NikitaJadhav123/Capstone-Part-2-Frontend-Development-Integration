import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminguardGuard } from './services/adminguard.guard';


const routes: Routes = [
  {
  path:'signin',
    component:LoginComponent
  },
  {
    path:'signup',
    component:RegisterComponent
  },
  {
    path:'customer',
    component:CustomerComponent
  },
  {
    path:'admin',
    component:AdminComponent,
    canActivate:[AdminguardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
