import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Loading from '../../FlyerLayout/components/Loading';


import '../../FlyerLayout/Flyer.scss';

function EDM() {
    const [getData, setGetData] = useState(null)
    const StyleSheet={
        width:"100vw",
        display: "flex",
        alignItems:"center",
        flexDirection:"column"
    }
         // -------- 取得目前的資料 ---------- //
    function getImg() {
        axios.get('https://raw.githubusercontent.com/jssanji03/reactPortfilio/main/publichttps://raw.githubusercontent.com/jssanji03/reactPortfilio/main/public/picData.json')
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
            <div className='panels'>
                <div className="row">
                    {getData ?
                        getData.map((item, index) => {
                            return (
                            <div key={index} className="webItem col-3">
                                <a href={item.url} target="_blank" rel="noreferrer">
                                <img src={`${process.env.PUBLIC_URL}/${item.pic}`} alt="" /></a>
                                <p className="title">{item.title}</p>
                                <p className="content">{item.content}</p>
                            </div>
                            );
                        })
                        : <Loading />
                    }
                    
                </div>
            </div>
        )
}
    
export default EDM;