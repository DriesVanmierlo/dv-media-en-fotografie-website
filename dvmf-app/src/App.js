import './App.css';
import Header from './components/header/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Success from './pages/Success';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Header className="header" />
      <div className="main-container">
        {/* <Home /> */}
        {/* <Portfolio /> */}
        {/* <About /> */}
        {/* <Contact /> */}
        {/* <Success /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
