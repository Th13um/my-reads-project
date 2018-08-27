import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class BookSearch extends Component {

  state = {
        query: ''
    }

//Require properties
    static propTypes = {
        bookFound: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired,
        searchBook: PropTypes.func.isRequired
    }

// Update Search Bar
    updateQuery = (query) => {
        this.setState({ query})
        this.props.searchBook(query);
    }

render() {

// For easiest reading and developpement
  const { bookFound } = this.props;
  const { changeShelf } = this.props;
  const { query } = this.state;

  return (
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/"  className="close-search">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.updateQuery(event.target.value)}/>
            </div>
          </div>
          <div className="search-books-results">
          <ol className="books-grid">
              {bookFound.map(book =>
                  <li key={book.id}>
                      <div className="book">
                          <div className="book-top">
                              <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                              <div className="book-shelf-changer">
                              <select value={book.shelf ? book.shelf : "none"} onChange={(event) => changeShelf(book, event.target.value)}>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="currentlyReading" >Currently Reading</option>
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
              )}
          </ol>
          </div>
        </div>
      )
    }
}

export default BookSearch;
