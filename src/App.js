import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookSearch from './BookSearch';
import BookIndex from './BookIndex';
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    books: []
  }

// Get all books from BooksAPI
  componentDidMount() {
   BooksAPI.getAll().then((books) => {
     this.setState({ books })
    })
  }

// Move book from shelf to another and update the page
changeShelf= (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
        this.componentDidMount()
        }
    )
};

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <BookIndex
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )} />
        <Route exact path='/search' render={(history) => (
          <BookSearch
            books={this.state.books}
            changeShelf={this.changeShelf}
          />
        )} />
      </div>
    )
  }
}


export default BooksApp;
