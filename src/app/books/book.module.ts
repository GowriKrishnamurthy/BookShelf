import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookDetailGuard } from './book-detail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BookListComponent,
    BookDetailsComponent
    ],
  imports: [
    RouterModule.forChild([
      { path: 'books', component: BookListComponent },
      { path: 'book/:id', 
        canActivate:[BookDetailGuard],
        component: BookDetailsComponent 
      }
     ]),
     SharedModule
    ]
})
export class BookModule { }
