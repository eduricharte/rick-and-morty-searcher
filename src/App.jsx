import portal from './assets/portal.png';
import './App.scss';
import Searcher from './components/Searcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={portal} className="App-logo" alt="logo" />
      </header>
      <div className="body">
        <Searcher />
      </div>
    </div>
  );
}

export default App;
