import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

const client = new ApolloClient({
    link: new HttpLink({ uri: process.env.REACT_APP_API }),
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>, 
    document.getElementById('root')
);
registerServiceWorker();
