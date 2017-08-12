import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderBooks() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          onClick={() => this.props.selectBook(book)}
          className="list-group-item"
        >
          {book.title}
        </li>
      );
    });
  }



  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderBooks()}
      </ul>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

function mapStateToProps({ books }) {
  return { books };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
