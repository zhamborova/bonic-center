import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/header.component.js";

import Home from "./pages/home/home.component.js";
import {ServiceWrapper} from "./pages/service/service.component.js";
import Services from "./pages/services/services.component.js";
import About from "./pages/about/about.component.js";


function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <div className='general'>
                    <Routes>
                        <Route path='/about' element={<About />} />
                        <Route path='/' element={<Services />} />
                        <Route path='/services/:serviceId' element={<ServiceWrapper />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}


export default App;
