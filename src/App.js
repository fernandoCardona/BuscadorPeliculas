import React, { Component } from 'react'
import Title from './componets/Title';
import SearchForm from './componets/SearchForm';
import 'bulma/css/bulma.css';
import './App.css';

function App() {
  const title = "Search Movie";

  return (
    <div className="App">
      <Title title={title} />
      <div className="SearchForm-wrapper">
        <SearchForm/>
      </div>
      
    </div>
  );
}

export default App;
