import React, { useState, } from 'react';
import {Outlet} from "react-router-dom";

import axios from 'axios';
import Waterfall from "waterfalljs-layout/react";
import Nav from "./components/FlyerNav";

import './Flyer.scss';

const SecondPage = () => {
    const [navId, setNavId] = useState("美容保養");
    const [tab, setTab] = useState([
    {
        tab: "美容保養",
        url:"/careFlyer",
        active: true
    },
    {
        tab: "精品",
        url:"/luxury",
        active: false
    },
    {
        tab: "3C家電",
        url:"/electronic",
        active: false
    },
    {
        tab: "生鮮食品",
        url:"/foods",
        active: false
    },
    {
        tab: "生活用品",
        url:"/necessities",
        active: false
    }
    ]);
    const StyleSheet={
        width:"100vw",
        height:"100vh",
        display: "flex",
        alignItems:"center",
        flexDirection:"column"
    }
 
    
    return(
        <div className='container waterfallIndex' style={StyleSheet}>
            <Nav tab={tab} setTab={setTab} setNavId={setNavId} navId={ navId} />
            <main>
                <div className='panels'>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}

export default SecondPage;