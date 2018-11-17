import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './books/book-list/book-list.component';
import { ConvertCharToSpacePipe } from './shared/convert-char-to-space.pipe';
import { StarComponent } from './shared/star/star.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    ConvertCharToSpacePipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
