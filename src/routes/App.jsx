import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';

const App = () =>{
    return(
        <div className='global-container' >
            <Routes>
                <Route path='/yubor-molina' exact element={<Home/>}/>
                <Route path='/yubor-molina/about-me' exact element={<AboutMe/>}/>
            </Routes>
        </div>
    )
}

export default App;