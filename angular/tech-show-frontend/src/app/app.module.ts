import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './components/login/login.component';

import { AuthService } from './services/auth.service';
import { BooksListComponent } from './screens/books-list/books-list.component';
import { BookComponent } from './components/book/book.component';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './store/books.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [AppComponent, LoginComponent, BooksListComponent, BookComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ books: booksReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
