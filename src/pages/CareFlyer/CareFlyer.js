import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CareFlyer.scss';

const SecondPage=()=>{
    const StyleSheet={
        width:"100vw",
        height:"100vh",
        backgroundColor:"#08D9D6",
        display: "flex",
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column"
    }
      // -------- 取得目前user的資料 ---------- //
    function getUserInfoFromServer() {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Client-ID {{clientId}}");
        const requestOptions = {
            method: 'GET',
            headers: {
                Authorization:'46acc85aaae5da2'
            },
            // body: formdata,
            redirect: 'follow'
        };
        axios.get('https://api.imgur.com/3/album/oRuzdkT', requestOptions)
        .then((res) => {
            // #2 如何把資料加入至
            // this.data = res.data.results
            console.log(res);
        })
// https://api.github.com/users/jssanji03/repos
        // fetch("https://api.imgur.com/3/album/oRuzdkT", requestOptions)
        //     .then(response => response.json())
        //     .then(result => console.table(result.data))
        //     .catch(error => console.log('error', error));

    }
  useEffect(() => {
    getUserInfoFromServer();
  });
    return(
        <div style={StyleSheet}>
            <h1 style={{color:"white",fontFamily:"Microsoft JhengHei"}}>我是第二頁</h1>
        </div>
    )
}

export default SecondPage;