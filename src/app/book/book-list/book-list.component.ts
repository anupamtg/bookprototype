import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {



    books: Array<any> = [

      {
      "Id":1,
      "Name":"Book2",
      "Type":"Type2",
      "Price":250
      },

      {
        "Id":2,
        "Name":"Book3",
        "Type":"Type3",
        "Price":250
        },

      {
      "Id":3,
      "Name":"Book4",
      "Type":"Type4",
      "Price":250
      },
      {
        "Id":4,
        "Name":"Book5",
        "Type":"Type5",
        "Price":250
        },

]

  constructor() { }

  ngOnInit(): void {
  }

}
