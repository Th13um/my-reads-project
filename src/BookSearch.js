import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class BookSearch extends Component {

  state = {
    query: '',
    bookFound: []
}

//Require properties.
    static propTypes = {
        bookFound: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired,
        searchBook: PropTypes.func.isRequired
    }

// Update Search Bar.
    updateQuery = (query) => {
        this.setState({ query})
        this.searchBook(query);
    }

    searchBook = (query) => {
        if (query) {
            //display books that match
            BooksAPI.search(query).then((bookFound) => {
                if (bookFound.error) {
                    this.setState({ bookFound: [] })
                } else {
                    this.setState({ bookFound })
                }
            })
            //if there is no query, then show no results
        } else {
            this.setState({ bookFound: [] })
        }
    }

render() {

  this.state.bookFound.map((queryBook) => {
    queryBook.shelf = "none"
    this.props.books.map((book) => {
      queryBook.id === book.id ? queryBook.shelf=book.shelf : ""}
    )
  })

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/"  className="close-search">Close</Link>
        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {this.state.bookFound.map((queryBook) =>
            <li key={queryBook.id}>
            <Book
                bookID={queryBook.id}
                image={queryBook.imageLinks}
                title={queryBook.title}
                authors={queryBook.authors}
                changeShelf={this.props.changeShelf}
                currentShelf={queryBook.shelf}
                />
              </li>
              )}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookSearch;
