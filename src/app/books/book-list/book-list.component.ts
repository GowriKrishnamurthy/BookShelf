import { Component, OnInit } from '@angular/core';
import { IBook } from '../models/book.model';

@Component({
  selector: 'bh-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  pageTitle = 'Book List';
  showImage : boolean;
  imgWidth:number;
  imgMargin:number;
  filterString:string='harry';
  list_books:IBook[]=  
  [
    {
      "bookID": 1,
      "bookTitle": "Harry Potter and the Chamber of Secrets ",
      "bookCode": "HP-002",
      "author":"J. K. Rowling",
      "PublicationDate": "July 2, 1998",
      "price": 12.95,
      "description": "Harry Potter and the Chamber of Secrets",
      "starRating": 4.6,
      "imgUrl": "https://en.wikipedia.org/wiki/Harry_Potter_and_the_Chamber_of_Secrets#/media/File:Harry_Potter_and_the_Chamber_of_Secrets.jpg"
    },
    {
        "bookID": 2,
        "bookTitle": "Harry Potter and the Prisoner of Azkaban",
        "bookCode": "HP-002",
        "author":"J. K. Rowling",
        "PublicationDate": "July 8, 1999",
        "price": 14.95,
        "description": "Harry Potter and the Prisoner of Azkaban",
        "starRating": 4.5,
        "imgUrl": "https://upload.wikimedia.org/wikipedia/en/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg"
      },
      
      {
        "bookID": 3,
        "bookTitle": "Geronimo Stilton: The Kingdom of Fantasy",
        "bookCode": "HP-003",
        "author":"Elisabetta Dami",
        "PublicationDate": "September 15, 2003",
        "price": 12,
        "description": "Geronimo Stilton: The Kingdom of Fantasy",
        "starRating": 4.1,
        "imgUrl": "http://t0.gstatic.com/images?q=tbn:ANd9GcRwMHdBo5Efe48a1T3eQ6mY0LeQbeXSOB99OGRP-yYtHvBcY2oG"
      }
  ];
    
  constructor() { }

  ngOnInit() {
    this.showImage=false;
    this.imgWidth = 50;
    this.imgMargin= 2;

  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
