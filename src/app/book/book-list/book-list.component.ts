import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {



    books: any ;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('data/bookdb.json').subscribe(
      data=>{
        this.books=data;
        console.log(data);
      }
    );
  }

}
