import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';

const App = () =>{
    return(
        <div className='global-container'>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/yubor-molina' element={<Home/>}/>
                    <Route path='/about-me' element={<AboutMe/>}/>
                </Routes>  
            </BrowserRouter>
      </div>
    )
}

export default App;