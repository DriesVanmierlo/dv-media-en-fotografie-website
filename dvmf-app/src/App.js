import './App.css';
import Header from './components/header/Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <div className="main-container">
        {/* <Home /> */}
        {/* <Portfolio /> */}
        {/* <About /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
