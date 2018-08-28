import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Book from './Book';

class BookIndex extends Component {

//Require properties
  static propTypes={
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {

// For easiest reading and developpement
    const {books} = this.props;

//Filter books by shelf
    const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
    const wantToRead = books.filter(book => book.shelf === "wantToRead");
    const booksRead = books.filter(book => book.shelf === "read");

    return (
      <div className="list-books">
       <div className="list-books-title">
          <h1>MyReads</h1>
       </div>
       <div className="list-books-content">
           <div>

               <div className="bookshelf">
                   <h2 className="bookshelf-title">Currently Reading</h2>
                   <div className="bookshelf-books">
                       <ol className="books-grid">
                           {currentlyReading.map((book) => (
                              <li key={book.id}>
                               <Book
                                 bookID={book.id}
                                 image={book.imageLinks}
                                 title={book.title}
                                 authors={book.authors}
                                 currentShelf={book.shelf}
                                 changeShelf={this.props.changeShelf}
                                />
                              </li>
                           ))}
                       </ol>
                   </div>
               </div>

               <div className="bookshelf">
                   <h2 className="bookshelf-title">Want to Read</h2>
                   <div className="bookshelf-books">
                       <ol className="books-grid">
                           {console.log(wantToRead)}
                           {wantToRead.map((book) => (
                               <li key={book.id}>
                                  <Book
                                    bookID={book.id}
                                    image={book.imageLinks}
                                    title={book.title}
                                    authors={book.authors}
                                    currentShelf={book.shelf}
                                    changeShelf={this.props.changeShelf}
                                  />
                               </li>
                           ))}
                       </ol>
                   </div>
               </div>

               <div className="bookshelf">
                   <h2 className="bookshelf-title">Read</h2>
                   <div className="bookshelf-books">
                       <ol className="books-grid">
                           {console.log(booksRead)}
                           {booksRead.map((book) => (
                               <li key={book.id}>
                                <Book
                                  bookID={book.id}
                                  image={book.imageLinks}
                                  title={book.title}
                                  authors={book.authors}
                                  currentShelf={book.shelf}
                                  changeShelf={this.props.changeShelf}
                                />
                               </li>
                           ))}
                       </ol>
                   </div>
               </div>
           </div>
       </div>

       <div className="open-search">
           <Link to='/search' className='add-contact'> Add a Book</Link>
       </div>
   </div>
    )
  }
}

 export default BookIndex;
