import { templateJitUrl } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  //template: '<h1>Iam a Card</h1>',
  //styles: ['h1{font-weight: normal}'],
  templateUrl: 'book-card.component.html',
  styleUrls: ['book-card.component.css']

})
export class BookCardComponent {

@Input() book : any
 

}
