
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsArea from './components/news';
export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
         <NewsArea/>      

      </div>
    )
  }
}


