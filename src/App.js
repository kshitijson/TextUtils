import './App.css';
/* import Accord from './components/Accord'; */
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light');
  const [modeName, setModeName] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const changeMode = () => {
    if(mode === 'light'){
      setMode('dark');
      setModeName('Disable Dark Mode');
      document.body.style.backgroundColor = "#131b44";
      showAlert('Dark mode enabled', 'success');
    }
    else{
      setMode('light');
      setModeName('Enable Dark Mode'); 
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode enabled', 'success');
    }
  }

  return (
    <>
      <BrowserRouter>
        <Navbar name="TextUtils" aboutus="About" mode={mode} chMode={changeMode} modeName={modeName}/>
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={
            <div className="container my-3">
              <About />
            </div>
          } />


          < Route path="/"
            element={
              <div className="container my-3">
                <TextForm heading="Enter text below" mode={mode} alert={showAlert}/>
              </div>
            } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
