import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/core/books.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  books: Array<Book> = [];
  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService
      .getNgBooks()
      .pipe(
        map((x) => {
          console.log(x);
          let res = <any>x;
          var items = res.items;
          let books = items.map((el) => {
            let book = <Book>{};
            book.authors = el.volumeInfo.authors;
            book.isFavorite = false;
            book.subtitle = el.volumeInfo.subtitle;
            book.title = el.volumeInfo.title;
            book.imageLinks = el.volumeInfo.imageLinks;
            return book;
          });
          return books;
        })
      )
      .subscribe((res) => {
        this.books = res;
        console.log(this.books);
      });
  }
}

export interface Book {
  title: string;
  subtitle: string;
  authors: string[];
  isFavorite: boolean;
  thumbNail: string;
  imageLinks: ImageLinks;
}

export interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}
