import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Loading from '../../FlyerLayout/components/Loading';


import '../../FlyerLayout/Flyer.scss';

function UIUX() {
    const [getData, setGetData] = useState(null)
         // -------- 取得目前的資料 ---------- //
    function getImg() {
        axios.get('/picData.json')
        .then((res) => {
            // #2 把資料加入
            console.log(res.data[10].data)
            setGetData(res.data[10].data);
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
                        let title;
                            if(item.id === 9){
                                title = <a href={item.url} target="_blank" rel="noreferrer"><img src={`${process.env.PUBLIC_URL}/${item.pic}`} alt="" /></a>
                            } else {
                                title = <img src={`${process.env.PUBLIC_URL}/${item.pic}`} alt="" />
                            }
                            return (
                                <div key={index} className="webItem col-3">
                                {title}
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
    
export default UIUX;