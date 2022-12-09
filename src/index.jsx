import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route,} from 'react-router-dom'
import { ContextProvider } from './Components/utils/global.context';
import Home from './Routes/Home';
import Contact from './Routes/Contact';
import Favs from './Routes/Favs';
import Detail from './Routes/Detail';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <Routes>
          <Route path = "/" element ={<App/>}>
            <Route path = "/home" element ={<Home/>}/>
              <Route path = "/dentist/:id" element={<Detail></Detail>}/>
            <Route path = "/contacto" element ={<Contact></Contact>}/>
            <Route path = "/favs" element ={<Favs></Favs>}/>
            
          </Route>
      </Routes> 
    </BrowserRouter>
  </ContextProvider>
);


