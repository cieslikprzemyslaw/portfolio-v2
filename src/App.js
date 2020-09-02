import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Route, } from 'react-router-dom';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <section>
          <Route path="/" exact component={Home}/>
        </section>
      </Router>
    </div>
  );
}

export default App;
