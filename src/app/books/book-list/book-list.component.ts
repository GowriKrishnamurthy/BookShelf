import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bh-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  pageTitle = 'Book List';
  showImage : boolean;
  
  constructor() { }

  ngOnInit() {
    this.showImage=false;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
