import logo from './logo.svg';
import './App.css';
import Greet from './components/greet/Greet';

function App() {
  const handleClick =()=> {
    console.log('clicked')
    return 2
  }
  return (
    <div className="App">
      <h1>Hello World...</h1>
      <button data-testid='button' onClick={handleClick} >Login</button>
    </div>
  );
}

export default App;
