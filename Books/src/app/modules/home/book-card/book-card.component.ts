import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../page/home/home.component';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent implements OnInit {
  @Input('books') book: Book;
  constructor() {
    console.log(this.book);
  }

  ngOnInit(): void {
    console.log(this.book);
  }
}
