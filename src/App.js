import React from 'react';
import './App.css';
import Header from "./components/header/header.component";

import Home from "./pages/home/home.component";
import {Route} from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";

const Services = () => (<div>Services</div>);
function App() {
  return (
    <div className="App">
       <Header/>
       <Switch>
      <Route exact path={'/'} component={Home} />
      <Route path={'/services'} component={Services} />
       </Switch>
    </div>
  );
}

export default App;
