import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './GlobalStyles.css';
import { NavTop } from './components/NavBar/NavTop';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';


function App() {

  return(
    <BrowserRouter>
        <div>
          <NavTop />
          <Router />
        </div>
      </BrowserRouter>
  );

}

export default App
