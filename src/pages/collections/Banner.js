import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HashLink } from 'react-router-hash-link';
import Loading from '../FlyerLayout/components/Loading';

import '../FlyerLayout/Flyer.scss';

function Banner() {
    const [getData, setGetData] = useState(null)
    const StyleSheet={
        width:"100vw",
        display: "flex",
        alignItems:"center",
        flexDirection:"column"
    }
         // -------- 取得目前的資料 ---------- //
    function getImg() {
        axios.get('/picData.json')
        .then((res) => {
            // #2 把資料加入
            console.log(res.data[7].data)
            setGetData(res.data[7].data);
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
            <h1 className='my-4'>Banner</h1>
            <div className='panels'>
                <div className="waterfall">
                        <div className="panel">
                            {getData ?
                                getData.map((item, index) => {
                                    return (
                                        <div key={index} className="item">
                                            <img src={`${process.env.PUBLIC_URL}/${item.pic}`} alt={item.id} />
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
    
export default Banner;