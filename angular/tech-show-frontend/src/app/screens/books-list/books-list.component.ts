import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { setBooks } from 'src/app/store/books.actions';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  bookList$: Observable<[]>;

  constructor(
    private bookListService: BooksService,
    private store: Store<any>
  ) {
    this.bookList$ = this.store.pipe(select((state) => state.books.books));
  }

  ngOnInit(): void {
    this.bookListService.getBooks().subscribe(response => {
      this.store.dispatch(setBooks({ books: response }));
    })
  }

}
