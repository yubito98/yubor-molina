import React from 'react';
import { Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';

const App = () =>{
    return(
        <div className='global-container'>
            <Routes>
                <Route path='/yubor-molina' element={<Home/>}/>
                <Route path='/yubor-molina/about-me' element={<AboutMe/>}/>
            </Routes>
      </div>
    )
}

export default App;