import React, { useState,useEffect } from 'react';
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
    //     fetch("https://api.imgur.com/3/album/oRuzdkT", requestOptions)
    //         .then(response => response.text())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));

    // }
    useEffect(() => {
    // getUserInfoFromServer();
    const headers = {
            headers: {
                Authorization:'75b19c3170301ac'
            },
            redirect: 'follow'
        };
    axios.get('https://api.imgur.com/3/album/oRuzdkT',{headers})
        .then(result => console.log(result));

  },[]);
  
    return(
        <div style={StyleSheet}>
            <h1 style={{color:"white",fontFamily:"Microsoft JhengHei"}}>我是第二頁</h1>
        </div>
    )
}

export default SecondPage;