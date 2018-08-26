import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class BookIndex extends Component {

  super(props) {
          this.setState = {
              books: props.books
          }
      }

  static propTypes={
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render() {

    const {books, changeShelf} = this.props;
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
                           {console.log(currentlyReading)}
                           {currentlyReading.map((book) => (
                               <li key={book.id}>
                                   <div className="book">
                                       <div className="book-top">
                                           <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                                           <div className="book-shelf-changer">
                                               <select name="bookShelf" value="currentlyReading" onChange={(event) => changeShelf(book, event.target.value)}>
                                                   <option value="none" disabled>Move to...</option>
                                                   <option value="currentlyReading">Currently Reading</option>
                                                   <option value="wantToRead">Want to Read</option>
                                                   <option value="read">Read</option>
                                                   <option value="none">None</option>
                                               </select>
                                           </div>
                                       </div>
                                       <div className="book-title">{book.title}</div>
                                       <div className="book-authors">{book.authors.join(', ')}</div>
                                   </div>
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
                                   <div className="book">
                                       <div className="book-top">
                                           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}></div>
                                           <div className="book-shelf-changer">
                                               <select name="bookShelf" value="wantToRead"onChange={(event) => changeShelf(book, event.target.value)}>
                                                   <option value="none" disabled>Move to...</option>
                                                   <option value="currentlyReading">Currently Reading</option>
                                                   <option value="wantToRead"> Want to Read</option>
                                                   <option value="read">Read</option>
                                                   <option value="none">None</option>
                                               </select>
                                           </div>
                                       </div>
                                       <div className="book-title">{book.title}</div>
                                       <div className="book-authors">{book.authors.join(', ')}</div>
                                   </div>
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
                                   <div className="book">
                                       <div className="book-top">
                                           <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                                           <div className="book-shelf-changer">
                                               <select name="bookShelf" value="read" onChange={(event) => changeShelf(book, event.target.value)}>
                                                   <option value="none" disabled>Move to...</option>
                                                   <option value="currentlyReading">Currently Reading</option>
                                                   <option value="wantToRead">Want to Read</option>
                                                   <option value="read">Read</option>
                                                   <option value="none">None</option>
                                               </select>
                                           </div>
                                       </div>
                                       <div className="book-title">{book.title}</div>
                                       <div className="book-authors">{book.authors.join(', ')}</div>
                                   </div>
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
