import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types'
import BookItem from './BookItem';


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
                            <BookItem
                            book={book}
                            updateBook={updateBook}
                            />
                    ))}
                </ol>
                </div>
          </div>
        );
    }
}

export default SearchPage;