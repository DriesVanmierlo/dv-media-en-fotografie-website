import './App.css';
import Header from './components/header/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Success from './pages/Success';

import {BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {

const location = useLocation();

  return (
    <Router>
      <Route render={({location})=> {
        return (
          <TransitionGroup>
          <CSSTransition
            timeout={500}
            classNames="fade"
            key={location.key} >
              <div className="App">
                <Header className="header" />
                <div className="main-container">
                  <Switch location={location}>
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
                    <Route path="/success">
                      <Success />
                    </Route>
                  </Switch>
                </div>
              </div>
            </CSSTransition>
          </TransitionGroup>);
        }} />
      </Router>
  );
}

export default App;
