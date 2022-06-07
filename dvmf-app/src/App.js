import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <div className="main-container">
        {/* <Home /> */}
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
