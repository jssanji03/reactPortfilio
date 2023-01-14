import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from './Loading';


function Care() {
    const[getData,setGetData]=useState(null)
         // -------- 取得目前的資料 ---------- //
    // function getUserInfoFromServer() {
    //     const myHeaders = new Headers();
    //     myHeaders.append("Authorization", "Client-ID {{clientId}}");
    //     const requestOptions = {
    //         method: 'GET',
    //         headers: {
    //             Authorization:'75b19c3170301ac'
    //         },
    //         // body: formdata,
    //         redirect: 'follow'
    //     };
    //     axios.get('https://api.imgur.com/3/album/oRuzdkT', requestOptions)
    //     .then((res) => {
    //         // #2 把資料加入
    //         console.log(res.data.data.images);
    //         setGetData(res.data.data.images);
    //     })
                
    // }
    function getImg() {
        axios.get('https://raw.githubusercontent.com/jssanji03/reactPortfilio/main/public/picData.json')
        .then((res) => {
            // #2 把資料加入
            console.log(res.data[0].data)
            setGetData(res.data[0].data);
        })
        .catch(error => console.log(error));
    }

    useEffect(() => {
        getImg();
    }, []);
        return (
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
        )
}
    
export default Care;