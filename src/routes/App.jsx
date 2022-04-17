import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';
import NotFound from '../pages/NotFound';

const App = () =>{
    return(
        <div className='global-container' >
            <Routes>
                <Route path='/' exact element={<Home/>}/>
                <Route path='/'exact element={<AboutMe/>}/>
                <Route element={<NotFound/>} />
            </Routes>
        </div>
    )
}

export default App;