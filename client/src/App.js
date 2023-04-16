import React, {Component} from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo'; //get data from apollo endpoint and inject to react app
import { InMemoryCache } from 'apollo-boost';

//components
import BookList from './components/BookList';

//Apollo client setup endpoint
// const client = new ApolloClient({
//   uri: 'http://localhost:4000/graphql',
//   // link: 'http://localhost:4000/graphql',
//   // cache: new InMemoryCache(),
// });

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>
            My Reading List
          </h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
  
}

export default App;
