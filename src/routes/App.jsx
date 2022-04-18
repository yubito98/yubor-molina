import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import NotFound from '../pages/NotFound';

const App = () =>{
    return(
        <div className='global-container' >
            <Routes>
                <Route path='/yubor-molina' exact element={<Home/>}/>
                <Route path='/yubor-molina'exact element={<AboutMe/>}/>
                <Route element={<NotFound/>} />
            </Routes>
        </div>
    )
}

export default App;