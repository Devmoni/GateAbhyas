import React from 'react';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Navbar from "./NavBar";
import Card from './Pages/Card';
import Footer from './Footer';
import NextPage from './Pages/NextPage';

export default function App() {

  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path='/NextPage' element={<NextPage/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}
