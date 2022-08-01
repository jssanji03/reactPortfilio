import React, { useState,useEffect } from 'react';
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
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Client-ID {{clientId}}");

        var formdata = new FormData();

        var requestOptions = {
            method: 'GET',
            headers: {
                Authorization:'75b19c3170301ac'
            },
            // body: formdata,
            redirect: 'follow'
        };

        fetch("https://api.imgur.com/3/album/oRuzdkT", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

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