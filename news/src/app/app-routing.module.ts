import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserwelcomeComponent } from './components/userwelcome/userwelcome.component';
import { User } from './models/user';

const routes: Routes = [
 {path : 'admin', component:AdminComponent },
 {path : 'register', component: RegisterComponent},
 {path : 'login', component : LoginComponent},
 {path: 'userwelcome', component: UserwelcomeComponent},
 {path : '',component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
