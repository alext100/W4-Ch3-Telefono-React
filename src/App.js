import './App.css';
import Key from './components/Keyboard/Key';
import Keyboard from './components/Keyboard/Keyboard';

function App() {
  return (
    <div className="container">
      <div className="keyboard-container">
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
