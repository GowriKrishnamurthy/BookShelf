import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ConvertCharToSpacePipe } from '../shared/convert-char-to-space.pipe';

import { StarComponent } from '../shared/star/star.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BookDetailGuard } from './book-detail.guard';

@NgModule({
  declarations: [
    StarComponent,
    BookListComponent,
    BookDetailsComponent,
    ConvertCharToSpacePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'books', component: BookListComponent },
      { path: 'book/:id', 
        canActivate:[BookDetailGuard],
        component: BookDetailsComponent 
      }
     ])
    ]
})
export class BookModule { }
