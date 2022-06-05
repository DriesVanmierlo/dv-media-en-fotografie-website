import './App.css';
import Header from './components/header/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <div className="main-container">
        <Home />
      </div>
    </div>
  );
}

export default App;
