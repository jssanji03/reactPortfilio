import React, { useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";


// 引入 共用元件
import Navbar from './share/component/NavBar/NavBar';
import Header from './share/component/Header/Header';
import About from './share/component/About/About';
import Skill from './share/component/Skill/Skill';
import Experience from './share/component/Experience/Experience';
import Flyer from './share/component/flyer/flyer';
import CareFlyer from './pages/CareFlyer/CareFlyer';
// import Button from './share/component/Button/Button';
// import Test from './share/component/Test1/Test';


function App(props) {
  const [percent, setPercent] = useState("30px");
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
              
              {/* <Button /> */}
              {/* <button style={{ height: percent }} className='btn btn-danger' onClick={() => { setPercent("70px") }}>{props.children}</button> */}
            </div>
      </main>

      <Routes>
        <Route path="/second" component={CareFlyer}/>
      </Routes>
    </>
  );
}

export default App;
