import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

// components
import FireComponent from './components/fire-component';

// apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  
  render() {
    return (
        <ApolloProvider client={client}>
            <div id="main">
                <h1>Heat Map of forest fire</h1>
                <FireComponent />
            </div>
        </ApolloProvider>
    );
  }
}

export default App;
