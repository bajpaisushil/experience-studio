import './App.css';
import Menu from './components/Menu';
import Data from './components/Data';



function App() {
  return (
    <div className="App">
      <div className='menu-part'>
        <Menu />
      </div>
      <div className='data-part'>
        <Data />
      </div>
      </div>
  );
}

export default App;

