import './App.css';
import Info from './components/Info/info';
import Keyboard from './components/Keyboard/Keyboard';
import Display from './components/Actions/Display';

function App() {
  const phoneNumber = [6, 6, 7, 3, 5, 9, 9, 6, 1];
  return (
    <div className="container">
      <Info />
      <div className="keyboard-container">
        <Keyboard />
      </div>
      <div className="actions">
        <Display phoneNumber={phoneNumber} />
      </div>
    </div>
  );
}

export default App;
