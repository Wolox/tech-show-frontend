import React from 'react';

import styles from './styles.module.scss';

function Book({ book }) {
  return (
    <div className={styles.bookContainer} key={book.id}>
      <img className={styles.bookImage} src={book.img} alt={book.title} />
      <h4 className={styles.bookTitle}>{book.title}</h4>
      <h6 className={styles.bookAuthor}>{book.author}</h6>
    </div>
  );
}

export default Book;
