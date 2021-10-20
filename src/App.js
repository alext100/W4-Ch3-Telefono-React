import './App.css';
import Info from './components/Info/info';
import Keyboard from './components/Keyboard/Keyboard';
import Display from './components/Actions/Display';
import Actions from './components/Actions/Actions';
import PhoneData from './components/context';

function App() {
  const phoneNumber = [6, 6, 7, 3, 5, 9, 9, 6, 1];
  const actionHref = "#";
  const isCalling = true; // "hang active"
  const actionText = "Hang"; //"Call" "Hang"

  return (
    <PhoneData.Provider value={{ actionHref, isCalling, actionText }}>
      <div className="container">
        <Info />
        <main className="phone">
          <div className="keyboard-container">
            <Keyboard />
          </div>
          <div className="actions">
            <Display phoneNumber={phoneNumber} />
            <Actions actionHref={actionHref} isCalling={isCalling} actionText={actionText} />
          </div>
        </main>
      </div>
    </PhoneData.Provider >
  );
}

export default App;
