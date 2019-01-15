import React, { Component } from 'react';
import SearchBar from './components/searchBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={(q) => {console.log('Submitted: ' + q)}}/>
      </div>
    );
  }
}

export default App;
