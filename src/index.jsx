import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Vans from './Pages/Vans.jsx';
import VanDetails from './Pages/VanDetails.jsx';
import Layout from './Components/Layout.jsx';
import Dashboard from './Pages/Host/Dashboard.jsx';
import Income from './Pages/Host/Income.jsx';
import Reviews from './Pages/Host/Reviews.jsx';
import HostVans from './Pages/Host/HostVans.jsx';
import HostVansDetails from './Pages/Host/HostVansDetails.jsx';
import HostLayout from './Components/HostLayout.jsx';

//import "./Server.jsx"

function App(){
  return(
    <BrowserRouter>
       <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element= { <Home /> } />
            <Route path='about' element= { <About /> } />
            <Route path='vans' element= { <Vans /> } />
            <Route path='/Vans/:id' element= { <VanDetails /> } />

            <Route path='host' element= { <HostLayout /> }>
               <Route index element= { <Dashboard /> } />
               <Route path='income' element= { <Income /> } />
               <Route path='reviews' element= { <Reviews /> } />
               <Route path='vans' element= { <HostVans /> } />
               <Route path='vans/:id' element= { <HostVansDetails /> } />
            </Route>
          </Route>
       </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
