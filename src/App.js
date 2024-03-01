import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/header.component";

import Home from "./pages/home/home.component";
import {ServiceWrapper} from "./pages/service/service.component";
import Services from "./pages/services/services.component";
import About from "./pages/about/about.component";


function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <div className='general'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/services' element={<Services />} />
                        <Route path='/services/:serviceId' element={<ServiceWrapper />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}


export default App;
