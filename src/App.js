import React, { useState } from 'react';
import { Routes, Route, Link,Switch } from "react-router-dom";


// 引入 共用元件
import Navbar from './share/component/NavBar/NavBar';
import Home from './pages/Index/Home';
import CareFlyer from './pages/CareFlyer/CareFlyer';
// import Button from './share/component/Button/Button';
// import Test from './share/component/Test1/Test';


function App(props) {
  const [percent, setPercent] = useState("30px");

  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="/CareFlyer" element={<CareFlyer />} />
      </Routes>
    </>
  );
}

export default App;
