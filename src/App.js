import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import About from './components/About'; // Import your About component

function App() {
  const [theme, setTheme] = useState('light-mode'); // Default to light mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = (newTheme) => {
    setTheme(newTheme);
    document.body.className = newTheme;
    showAlert(`Theme ${newTheme} is enabled`, 'success');
  };

  return (
    <div>
      <Navbar title="Textutiles" about="aboututiles" mode={theme} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Enter The text" showAlert={showAlert} />
      </div>
      // <div className="container my-3">
      //   <Routes>
      //     <Route path="/" element={<TextForm heading="Enter The text" showAlert={showAlert} />} />
      //     <Route path="/about" element={<About />} />
      //   </Routes>

  );
}

export default App;



