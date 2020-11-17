import logo from './logo.svg';
import './App.css';
import AddPage from './components/pages/AddPage';
import SessionPage from './components/pages/SessionPage';
import "fontsource-open-sans";

function App() {
  return (
    <div>
      <SessionPage/>
      <AddPage/>
    </div>
  );
}

export default App;
