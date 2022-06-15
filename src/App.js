// import React, { useState, useEffect } from 'react';
import React, { Component } from 'react'

// 引入 共用元件
import Navbar from './share/component/NavBar/NavBar';
import Header from './share/component/Header/Header';
import About from './share/component/About/About';


function App() {
  const style = {
    width: "85%",
    height:"100vh",
    background: "rgb(235, 235, 235)",
    padding:"50px 20px"
    // display: "flex",
  }
  return (
    <>
      <Navbar />
      <main style={style}>
          <Header />
          <About />
        {/* <div className='container'>
        </div> */}
      </main>
      {/* <div className="container">
        <div className="chevron chevron-up"></div>
        <div className="number">
          256
        </div>
        <div className="chevron chevron-down"></div>
      </div> */}
    </>
  );
}

export default App;
