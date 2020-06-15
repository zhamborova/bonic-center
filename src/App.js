import React from 'react';
import './App.scss';
import Header from "./components/header/header.component";

import Home from "./pages/home/home.component";
import {Route} from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import Service from "./pages/service/service.component";
import Services from "./pages/services/services.component";
import About from "./pages/about/about.component";
import Footer from "./components/footer/footer.component";


function App() {
  return (
    <div className="App">
        <Header/>
       <div className='general'>
      <Switch className = 'switch'>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About}/>
      <Route exact path='/services' component={Services} />
      <Route path='/services/:category/:serviceId' render={({ match }) => <Service match={match} />}/>
      </Switch>
       </div>
    </div>
  );
}

export default App;
