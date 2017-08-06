import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchPage from './SearchPage'
import BookList from './BookList'
import {Route} from 'react-router-dom'
class BooksApp extends React.Component {
  state = {
    books: [], //Save books!
    books_search: [], //Save Searched books!
    query: '' //Save search query
  }

  componentDidMount(){
    //Get all books from API
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    });
  }

  updateBook = (book,status) =>{
    //First change the book shelf to new status
      book.shelf = status
      //First filter the book to delete the book from list and then add again the book with the new shelf
      this.setState((state) => ({
        books: [book,...state.books.filter((c) => c.id !==book.id)]
      }))
      //Update the book api
    BooksAPI.update(book,status).then(() => {
    });
  }

  searchBook = (query) => {

    this.setState({query})
    //If there is no query, empty books_search
    if(!this.state.query){
      this.setState({books_search:[]})
    }
    //Search Book on api
        BooksAPI.search(query,4).then((books_search) => {
          // Books sometimes return error... so i filter
          if(!books_search.error){
            //I search the searched book on the books and update shelf
            books_search.map(book_search => 
              this.state.books.map(book => {
                if(book_search.id === book.id){
                  book_search.shelf= book.shelf
                }
              }
              )
            )
            //Update books_search
            this.setState({books_search:books_search})
          }else{
            this.setState({books_search:[]})
          }
        }
      
        )
      
   }

  render() {

    return (
      <div className="app">
        <Route exact path="/" render={()=>
          <BookList
            bookList={this.state.books} 
            updateBook={this.updateBook}

          />
        }/>
        <Route path="/search" render={()=>
          <SearchPage
            bookList={this.state.books_search} 
            updateBook={this.updateBook}
            searchBook={this.searchBook}
            querySearch={this.state.query}
          />} />
      </div>
    )
  }
}

export default BooksApp
