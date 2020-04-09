import React, { useEffect, useState } from 'react';

import { getBooks } from '../../services/BooksService';

import styles from './styles.module.scss';

function BookList() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks().then(response => {
      setBooks(response.data);
    });
  }, []);

  return (
    <div className={styles.container}>
      {books.map(book => (
        <div className={styles.bookContainer} key={book.id}>
          <img src={book.img} alt={book.title} />
          <h4 className={styles.bookTitle}>{book.title}</h4>
          <h6 className={styles.author}>{book.author}</h6>
        </div>
      ))}
    </div>
  );
}

export default BookList;
