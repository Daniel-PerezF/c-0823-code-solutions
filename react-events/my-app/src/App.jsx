import './App.css';
import CustomButton from './CustomButton';

function App() {
  function handleCustomClick(text) {
    alert(text);
  }

  return (
    <>
      <CustomButton color="red" text="Im" onCustomClick={handleCustomClick} />
      <CustomButton
        color="purple"
        text="Learning"
        onCustomClick={handleCustomClick}
      />
      <CustomButton
        color="blue"
        text="React"
        onCustomClick={handleCustomClick}
      />
    </>
  );
}

export default App;
