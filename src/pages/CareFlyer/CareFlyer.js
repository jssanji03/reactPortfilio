import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './CareFlyer.scss';

const SecondPage = () => {
   const[getData,setGetData]=useState(null)
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
                Authorization:'75b19c3170301ac'
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
                
        // fetch("https://api.imgur.com/3/album/oRuzdkT", requestOptions)
        //   .then(response => {
        //     response.json();
        //   })
        //   .then(result => {
        //     console.log(result);
        //     setGetData(result.data);
        //     console.log(getData);
        //   })
        //     .catch(error => console.log('error', error));

    }
  
  useEffect(() => {
    getUserInfoFromServer();
    // const headers = {
    //         headers: {
    //             Authorization:'75b19c3170301ac'
    //         },
    //         redirect: 'follow'
    //     };
    // axios.get('https://api.imgur.com/3/album/oRuzdkT', headers)
    //   .then(response => {
    //     setGetData(response.data);
    //     console.log(getData);
    //     console.log(response.data.images);
    //   })
  });
  
    return(
        <div style={StyleSheet}>
            <h1 style={{color:"white",fontFamily:"Microsoft JhengHei"}}>我是第二頁</h1>
        </div>
    )
}

export default SecondPage;