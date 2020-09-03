import React from 'react';
import './_App.scss';
import {BrowserRouter as Router, Route, } from 'react-router-dom';
import Home from './pages/Home/Home';
import Skills from './pages/Skills/Skills';
import Projects from './pages/projects/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <section>
          <Route path="/" exact component={Home}/>
          <Route path="/skills" exact component={Skills}/>
          <Route path="/projects" exact component={Projects}/>
        </section>
      </Router>
    </div>
  );
}

export default App;
