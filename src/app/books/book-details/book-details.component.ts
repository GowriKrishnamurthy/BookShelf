import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  // No need of selector as we are not going to nest this component in any component
  // we'll instead display the component's view as part of the routing, 
  /* selector: 'bookshelf-bookdetails', */

  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
  }

}
