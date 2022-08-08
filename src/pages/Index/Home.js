import React from 'react';


// 引入 共用元件
import Navbar from '../../share/component/NavBar/NavBar';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skill from './components/Skill/Skill';
import Experience from './components/Experience/Experience';
import Flyer from './components/flyer/flyer';


function Home() {
  const style = {
    width: "85%",
    background: "rgb(235, 235, 235)",
    padding: "50px 20px",
  }

  return (
    <>
          <Navbar />
          <main style={style}>
            <Header />
            <div className="container">
              <About />
              <Skill />
              <Experience />
              <Flyer />
            </div>
      </main>
    </>
  );
}

export default Home;
