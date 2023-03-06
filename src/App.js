import logo from './logo.svg';
import './App.css';

import NewTwittForm from './Components/NewTwittForm';
import Twitt from './Components/Twitt';

function App() {
  return (
    <div className="App">
      <NewTwittForm/>
      <Twitt/>
    </div>
  );
}

export default App;
