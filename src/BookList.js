import React from 'react';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';
import BookItem from './BookItem';


const BookList = (props) => {
        const {bookList,updateBook} = props
        const currentlyReading = bookList.filter((book) => book.shelf ==='currentlyReading')
        const read = bookList.filter((book) => book.shelf ==='read')
        const wantToRead = bookList.filter((book) => book.shelf ==='wantToRead') 
        return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {currentlyReading.length !== 0 && (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {currentlyReading.map((book) => 
                            <BookItem
                            book={book}
                            updateBook={updateBook}
                            />
                    )}
                    </ol>
                  </div>
                </div>
                )}
          {wantToRead.length !== 0 && (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {wantToRead.map((book) => 
                            <BookItem
                            book={book}
                            updateBook={updateBook}
                            />
                    )}
                    </ol>
                  </div>
                </div>
                )}
          {read.length !== 0 && (
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {read.map((book) => 
                           <BookItem
                            book={book}
                            updateBook={updateBook}
                            />
                    )}
                    </ol>
                  </div>
                </div>
                )}
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        );
}
BookList.propTypes={
    bookList: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
}
export default BookList;