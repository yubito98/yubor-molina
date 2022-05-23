import React from 'react';
import {Route} from 'react-router-dom'
import Home from '../pages/Home';
import AboutMe from '../pages/AboutMe';

const App = () =>{
    return(
        <div className='global-container'>
                <Route path='/' element={<Home/>}/>
                <Route path='/about-me' element={<AboutMe/>}/>
      </div>
    )
}

export default App;