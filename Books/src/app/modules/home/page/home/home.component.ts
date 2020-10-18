import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  books = [];
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getNgBooks().subscribe((res) => {
      console.log(res);
      this.books = res.items;
    });
  }
}
