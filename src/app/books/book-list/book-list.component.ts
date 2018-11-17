import { Component, OnInit } from '@angular/core';
import { IBook } from '../models/book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'bookshelf-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  pageTitle = 'Book List';
  showImage: boolean;
  imgWidth: number;
  imgMargin: number;
  _filterString: string = '';

  get filterString(): string {
    return this._filterString;
  }
  set filterString(value: string) {
    this._filterString = value;
    this.filteredBooks = this.filterString ? this.filterBooksByTitle(this.filterString) : this.list_books;
  }

  filteredBooks: IBook[] = [];
  list_books: IBook[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
    this.showImage = false;
    this.imgWidth = 50;
    this.imgMargin = 2;
    this.list_books = this.bookService.getBooks();
    this.filteredBooks = this.list_books;
  }


  filterBooksByTitle(filterBy: string): IBook[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.list_books.filter((book: IBook) =>
      book.bookTitle.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List: ' + message;
  }
}
