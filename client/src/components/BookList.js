import React, {Component} from 'react';
import { gql } from 'apollo-boost'; //to create query
import { graphql } from 'react-apollo'; //to parse query or bind the query

const getBooksQuery = gql`
{
    books {
        name
        id
    }
}
`

class BookList extends Component {
  render() {
    console.log(this.props);
    return (
      <div id="main">
        <ul id="book-list">
            <li>
                Book Name
            </li>
        </ul>
      </div>
    );
  }
  
}

export default graphql(getBooksQuery)(BookList);
