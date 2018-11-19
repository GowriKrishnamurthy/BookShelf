import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IBook } from './models/book.model';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  list_books: IBook[] = [];

  constructor(private httpClient: HttpClient) { }
  private booksURL = 'api/books/books.json';

  public getBooks(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(this.booksURL).pipe(
      tap(data => console.log('All books:' + JSON.stringify(data))));
  }
}