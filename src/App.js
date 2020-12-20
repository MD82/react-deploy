import React from 'react';
import profileImage from './img/md-pic.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author : MD Worshiper</h2>
      <img src={profileImage} alt="profile-image" width="200px" />
    </div>
  );
}

export default App;
