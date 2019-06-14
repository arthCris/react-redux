import React, { Component } from 'react'

import Contacts from './components/contacts/Contacts';
import Navbar from './components/layout/Navbar';

import { Provider } from 'react-redux';
import store from './store';
import './App.css';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Navbar/>
          <Contacts/>
        </div>
      </Provider>
    )
  }
}

export default App
