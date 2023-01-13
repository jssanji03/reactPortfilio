import React, { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";

import axios from 'axios';
import { Link } from "react-router-dom";
import Loading from '../FlyerLayout/components/Loading';
import WebSiteNav from "./components/WebSiteNav";


import '../FlyerLayout/Flyer.scss';

function EDM() {
    const [getData, setGetData] = useState(null);
    const [navId, setNavId] = useState("WebSite");
    const [tab, setTab] = useState([
    {
        tab: "WebSite",
        url:"/webSite",
        active: true
    },
    {
        tab: "UIUX",
        url:"/uiux",
        active: false
    }
    ]);
    const StyleSheet={
        width:"100vw",
        display: "flex",
        alignItems:"center",
        flexDirection:"column"
    }
         // -------- 取得目前的資料 ---------- //
    function getImg() {
        axios.get('http://localhost:3000/picData.json')
        .then((res) => {
            // #2 把資料加入
            console.log(res.data[9].data)
            setGetData(res.data[9].data);
        })
        .catch(error => console.log(error));
    }

    useEffect(() => {
        getImg();
    }, []);
    return (
        <div className='container waterfallIndex' style={StyleSheet}>
            {/* <Link className='mt-5 home' to="/">My Portfilio</Link>
            <h1 className='my-4'>WebSite</h1> */}
            <WebSiteNav tab={tab} setTab={setTab} setNavId={setNavId} navId={ navId} />
            <div className='panels'>
                <Outlet />
                {/* <div className="row">
                    {getData ?
                        getData.map((item, index) => {
                            return (
                            <div key={index} className="webItem col-3">
                                <a href={item.url} target="_blank" rel="noreferrer">
                                <img src={item.pic} alt="" /></a>
                                <p className="title">{item.title}</p>
                                <p className="content">{item.content}</p>
                            </div>
                            );
                        })
                        : <Loading />
                    }
                    
                </div> */}
            </div>
        </div>
        )
}
    
export default EDM;