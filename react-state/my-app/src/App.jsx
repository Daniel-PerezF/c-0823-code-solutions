import './App.css';
import ToggleButton from './ToggleButton';

function App() {
  return (
    <>
      <div className="card">
        <ToggleButton color="red" text="Btn1" />
        <ToggleButton color="green" text="Btn2" />
        <ToggleButton color="blue" text="Btn3" />
      </div>
    </>
  );
}

export default App;
