import './App.css';
import Header from './components/header/Header';
import About from './pages/About';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <div className="main-container">
        {/* <Home /> */}
        {/* <Portfolio /> */}
        <About />
      </div>
    </div>
  );
}

export default App;
