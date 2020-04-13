import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBooks } from '../../services/BooksService';

import styles from './styles.module.scss';
import Book from './components/Book';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  useEffect(() => {
    getBooks().then(response => {
      dispatch({ type: 'GET_BOOKS', payload: response.data });
    });
  }, [dispatch]);

  return (
    <div className={styles.bookListContainer}>
      <input className={styles.bookFilterInput} type="text" placeholder="Buscá el un libro por título" />
      <div className={styles.bookList}>
        {books.map(book => (
          <Book book={book} key={book.id} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
