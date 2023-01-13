import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Loading from '../FlyerLayout/components/Loading';

import '../FlyerLayout/Flyer.scss';

function Packages() {
    const [getData, setGetData] = useState(null)
    const StyleSheet={
        width:"100vw",
        height:"100vh",
        display: "flex",
        alignItems:"center",
        flexDirection: "column",
    }
         // -------- 取得目前的資料 ---------- //
    function getImg() {
        axios.get('http://localhost:3000/picData.json')
        .then((res) => {
            // #2 把資料加入
            console.log(res)
            setGetData(res.data[5].data);
        })
        .catch(error => console.log(error));
    }

    useEffect(() => {
        getImg();
    }, []);
    return (
        <div className='container waterfallIndex' style={StyleSheet}>
            <HashLink className='mt-5 home' smooth to="/#bookmark">
                My Portfilio
            </HashLink>
            <h1 className='my-4'>產品包裝</h1>
            <div className='panels'>
                <div className="waterfall">
                        <div className="panel">
                            {getData ?
                                getData.map((item, index) => {
                                    return (
                                        <div key={index} className="item">
                                            <img src={item.pic} alt={item.id} />
                                        </div>
                                    );
                                })
                                : <Loading />
                            }
                        </div>
                </div>
            </div>
        </div>
        )
}
    
export default Packages;