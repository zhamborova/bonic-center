import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/header.component";
import CarouselCustom from "./components/carousel/carouser.component";
import Home from "./pages/home/home.component";

function App() {
  return (
    <div className="App">

      <Header />
      <Home />
    </div>
  );
}

export default App;
