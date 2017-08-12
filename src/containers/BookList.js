import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
  renderBooks() {
    return this.props.books.map(({title}) => {
      return (
        <li
          key={title}
          className="list-group-item"
        >
          {title}
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

function mapStateToProps({ books }) {
  return { books };
}

export default connect(mapStateToProps, null)(BookList);
