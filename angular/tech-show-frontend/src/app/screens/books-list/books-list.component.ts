import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

  constructor(private bookListService: BooksService) { }
  bookList = [];

  ngOnInit(): void {
    this.bookListService.getBooks().subscribe(response => {
      this.bookList = response;
    })
  }

}
