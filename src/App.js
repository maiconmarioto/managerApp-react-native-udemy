import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAMw8vaDZNu13ymVqqsNezItD7djiV_SYY',
      authDomain: 'manager-1a51a.firebaseapp.com',
      databaseURL: 'https://manager-1a51a.firebaseio.com',
      storageBucket: 'manager-1a51a.appspot.com',
      messagingSenderId: '221173798250'
  };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
