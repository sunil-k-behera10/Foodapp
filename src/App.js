import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Cards from './components/Cards';
import Fooditems from './components/Fooditems';
import Category from './components/Category';


function App() {
  return (
    <div >
      <Navbar/>
      <Body/>
      <Cards/>
      <Fooditems/>
      <Category/>
    </div>
  );
}

export default App;
