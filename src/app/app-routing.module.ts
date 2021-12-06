import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from 'src/app/home/home.component';
import {BookListComponent} from 'src/app/book2/book-list/book-list.component';
import {UsersComponent} from 'src/app/users/users.component';
import {LoginComponent} from 'src/app/login/login.component';
import {RegisterComponent} from 'src/app/register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'books',component: BookListComponent},
  {path: 'users', component: UsersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}


