import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBook } from '../models/book.model';

@Component({
  // No need of selector as we are not going to nest this component in any component
  // we'll instead display the component's view as part of the routing, 
  /* selector: 'bookshelf-bookdetails', */

  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  pageTitle:string='Book details';
  book:IBook;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    let id= +this.activatedRoute.snapshot.paramMap.get('id') ;
    this.pageTitle += `: ${id}`;
  }

}
