import React, { Component } from "react";
import styles from "./App.css";
//components
import Navbar from './Components/Navbar';
import MainHead from './Components/MainHead';
import Popup from './Components/Popup';

function App() {
  return (
    <div className="App">
        <Navbar />
        <MainHead />
    </div>
  );
}

export default App;
