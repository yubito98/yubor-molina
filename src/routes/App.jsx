import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';

const App = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/yubor-molina' element={<Home/>}/>
                <Route path='/about-me' element={<AboutMe/>}/>
            </Routes>
       </BrowserRouter>
      
    )
}

export default App;