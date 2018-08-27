import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookSearch from './BookSearch';
import BookIndex from './BookIndex';
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    books: [] ,
    bookFound: []
  }
// Get all books from BooksAPI
  componentDidMount() {
   BooksAPI.getAll().then((books) => {
     this.setState({ books })
    })
  }
//Search a matching book in the BooksAPI from a Query.
searchBook = (searchQuery) => {
  //if the search query is cleared, then show no results
  if (searchQuery.error){
    this.setState(()=>{
      return {bookFound:[]};
    })
  }else{
    //search the BooksAPi and return the result.
    BooksAPI.search(searchQuery).then(bookFound => {
      return bookFound;
    })
    .then(bookFound => {
        let response = true;
        let resultsExist = bookFound != null? true : false;
        if(!resultsExist) {response = false;}

        if (response) {
          let belongs = Object.entries(bookFound)[0][0] === 'error'?false : true;
          if(!belongs) {response = false}
        }
        if(response) {
          let results = bookFound.map(b =>b.id);
          let bookQuery = [];
          results.forEach(function (b) {
          bookQuery.push(BooksAPI.get(b))
          })
          return Promise.all(bookQuery)
            .then(newResults => {
              return newResults
            })

        }else{
          return bookFound = [];
        }
    })
    //Update the UI.
    .then(bookFound => {

      this.setState(state => ({
        bookFound
      }))
    })
  }}

// Move book from shelf to another and update the page
  changeShelf = (movingBook, newShelf) => {
    BooksAPI.update(movingBook, newShelf).then(() => {

      BooksAPI.getAll().then((books) => {
             this.setState({
               books
             })
           })
         })
     }

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
            bookFound={this.state.bookFound}
            changeShelf={this.changeShelf}
            searchBook={this.searchBook}
          />
        )} />
      </div>
    )
  }
}


export default BooksApp;
