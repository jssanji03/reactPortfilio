import React, { useState } from 'react';
import { Routes, Route, Link,Switch } from "react-router-dom";


// 引入 共用元件
import Navbar from './share/component/NavBar/NavBar';
import Home from './pages/Index/Home';
import Packages from './pages/collections/packages';
import Cis from './pages/collections/Cis';
import Banner from './pages/collections/Banner';
import Edm from './pages/collections/EDM';
import Website from './pages/collections/WebSite';

// 引入 作品集元件
import FlyerLayout from './pages/FlyerLayout/Flyer';
import Care from './pages/FlyerLayout/components/Care';
import Luxury from './pages/FlyerLayout/components/Luxury';
import Electronic from './pages/FlyerLayout/components/Electronic';
import Foods from './pages/FlyerLayout/components/Foods';
import Necessities from './pages/FlyerLayout/components/Necessities';


function App(props) {
  const [percent, setPercent] = useState("30px");

  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path="/packages" element={<Packages />} />
        <Route path="/cis" element={<Cis />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="/EDM" element={<Edm />} />
        <Route path="/website" element={<Website />} />
        <Route path="/" element={<FlyerLayout />}>
          <Route index path="/careFlyer"  element={<Care />}/>
          <Route path="/luxury"  element={<Luxury />} />
          <Route path="/electronic"  element={<Electronic />} />
          <Route path="/foods"  element={<Foods />} />
          <Route path="/necessities"  element={<Necessities />} />
        </Route>
      </Routes>
      {/* 註冊路由表 */}
    </>
  );
}

export default App;
