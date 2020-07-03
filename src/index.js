import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import {BrowserRouter} from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import {createStore, compose, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import rootRedusers from './store/reducers/rootReducers'
import thunk from 'redux-thunk'
// import { ApolloClient, gql, graphql, ApolloProvider } from 'react-apollo'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  }) : compose;

const store = createStore(
  rootRedusers,
  composeEnhancers(
    applyMiddleware(thunk)
    )
  )

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)



ReactDOM.render(
  <React.StrictMode>
   {app}
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
