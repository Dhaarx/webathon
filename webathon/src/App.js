import './App.css';
import React from 'react';
// import Home from './screen/home';
import { Outlet } from 'react-router-dom';
import Navbar from './navbars/navbar';
import Footer from './foot/footer';

function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
   </>
  );
}

export default App;
