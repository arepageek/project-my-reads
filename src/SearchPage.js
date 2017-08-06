import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types'


class SearchPage extends Component {
    static propTypes= {
        bookList: PropTypes.array.isRequired,
        updateBook: PropTypes.func.isRequired,
        searchBook: PropTypes.func.isRequired,
        query: PropTypes.string.isRequired

    }
    render() {
        const {bookList,updateBook,searchBook,querySearch} = this.props
        console.log(bookList)
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' className="close-search" >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={querySearch} onChange={(event) => searchBook(event.target.value)
                        }/>             
                    </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                {
                    bookList.length !== 0 && (
                    bookList.map((book) => 
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ 
                                width: 128, 
                                height: 193, 
                                backgroundImage: `url(${book.imageLinks.thumbnail})`
                             }}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={(event)=> updateBook(book,event.target.value)}>
                                <option value="disabled" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                       <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                    ))}
                </ol>
                </div>
          </div>
        );
    }
}

export default SearchPage;