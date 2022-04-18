import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home';

const App = () =>{
    return(
        <div className='global-container' >
            <Routes>
                <Route path='/yubor-molina' exact element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default App;