import './App.css';
import React, { useState } from 'react';
import Login from './Components/Login';
import Register from './Components/Register';


function App() {
  const [currenrtForm , setCurrentForm ] = useState('login')

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="App">
      {
      currenrtForm === 'login' ? <Login onFormSwitch= {toggleForm} /> : <Register onFormSwitch= {toggleForm} />
    }
    </div>
  );
}

export default App;
