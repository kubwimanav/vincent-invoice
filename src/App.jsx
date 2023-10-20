import React, {useState } from 'react';
import './assets/Image2.css'
import Form from './assets/components/Form';
import Invoice from './assets/components/invoice';
import Single from './assets/components/Hd1';
import Home from './assets/components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <>

<div className="IMG">
 <div >
  <img className='imag1' src='imaged.png'></img>
  </div>

<div className="circular-container">
<img
 src="hero.jpg" className="circular-image"/>
</div>
</div>  
  <BrowserRouter>
  <Routes>
    <Route path='/paid'
     element={ 
       <div>
        <Single/>
      </div>
     } />
     <Route path='/'
     element={ 
       <div>
        <Invoice/>
      </div>
     } />
  </Routes>

  </BrowserRouter> 
  
  
  </>

    
  );
}

export default App;
