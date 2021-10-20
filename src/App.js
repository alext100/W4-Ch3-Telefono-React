import './App.css';
import Info from './components/Info/info';
import Keyboard from './components/Keyboard/Keyboard';

function App() {
  return (
    <div className="container">
      <Info />
      <div className="keyboard-container">
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
