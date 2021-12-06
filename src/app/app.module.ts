import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book2/book-list/book-list.component';
import { SampleFormComponent } from './book2/sample-form/sample-form.component';
import { BookRowComponent} from './book2/book-row/book-row.component';
import { BookDetailsComponent} from './book2/book-details/book-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './user/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent,
    BookRowComponent,
    BookDetailsComponent,
    SampleFormComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UsersComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
     FormsModule,
     HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }