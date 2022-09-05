import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import Hubspot from '../pages/Hubspot';

const App = () =>{
    return(
        <div className='global-container'>
            <HashRouter>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/about-me' element={<AboutMe/>}/>
                    <Route path='/hubspot' element={<Hubspot/>}/>
                </Routes>  
            </HashRouter>
      </div>
    )
}

export default App;