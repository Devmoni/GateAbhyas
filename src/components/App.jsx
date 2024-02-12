import React from 'react';
import {Routes, Route } from 'react-router-dom';
import Navbar from "./NavBar";
import Card from './Pages/Card';
import Footer from './Footer';
import NextPage from './Pages/NextPage';
import QuizPage from './Pages/QuizPage';

export default function App() { 

  return (
    <div>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path='/NextPage' element={<NextPage/>}/>
        <Route path='/QuizPage' element={<QuizPage/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}
