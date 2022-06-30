import logo from './logo.svg';
import './App.css';
import Main from './component/Main';
import Navbar from './component/Navbar';
import {useState} from 'react'
function App(){

  const [darkMode, setDarkMode] = useState(true)

  function toggle(){
    setDarkMode(prevDarkMode => !prevDarkMode)
  }
  return (
    <div className="App">
      <Navbar darkMode={darkMode} toggleDarkMode={toggle} />
      <Main darkMode={darkMode} />
    </div>
  );
}
export default App;
