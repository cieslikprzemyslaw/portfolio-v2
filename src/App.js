import React from 'react';
import './_App.scss';
import {BrowserRouter as Router, Route, } from 'react-router-dom';

import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Projects from './pages/Projects/Projects';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <section>
          <Route path="/" exact component={Home}/>
          <Route path="/skills" exact component={Skills}/>
          <Route path="/projects" exact component={Projects}/>
          <Route path="/about" exact component={About}/>
          <Route path="/contact" exact component={Contact}/>
        </section>
      </Router>
    </div>
  );
}

export default App;
