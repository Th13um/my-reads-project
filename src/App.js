import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookSearch from './BookSearch';
import BookIndex from './BookIndex';
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    books: [] ,
    searchBook: []
  }

  componentDidMount() {
   BooksAPI.getAll().then((books) => {
     this.setState({ books })
     //console.log(this.state);
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(book => {
      this.setState(state => ({
        books: state.books.update
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' exact render={() => (
          <BookIndex
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )} />
        <Route exact path='/search' render={() => (
          <BookSearch
            changeShelf={this.changeShelf}
            updateBooksList={this.updateBooksList}
            searchBook={this.searchBook}
          />
        )} />
      </div>
    )
  }
}


export default BooksApp;
