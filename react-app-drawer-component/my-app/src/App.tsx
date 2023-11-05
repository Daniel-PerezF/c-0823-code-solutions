import './App.css';
import { AppDrawer } from './AppDrawer';

const items = [
  {
    id: 1,
    title: 'The Legend of Zelda',
  },
  {
    id: 2,
    title: 'A Link to the Past',
  },
  {
    id: 3,
    title: 'Ocarina of Time',
  },
  {
    id: 4,
    title: 'The Wind Waker',
  },
  {
    id: 5,
    title: 'Breath of the Wild',
  },
];
function App() {
  return (
    <>
      <AppDrawer items={items} onSelect={() => {}} />
    </>
  );
}

export default App;
