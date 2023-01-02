import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Loading from './Loading';


function Foods() {
    const[getData,setGetData]=useState(null)
    // -------- 取得目前的資料 ---------- //
    function getImg() {
        axios.get('http://localhost:3000/picData.json')
        .then((res) => {
            // #2 把資料加入
            setGetData(res.data[3].data);
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
                        getData.map((item,index)=>{
                            return (
                                <div key={index} className="item">
                                    <img src={item.pic} alt={item.id} />
                                </div>
                            )
                        })
                        : <Loading/>
                    }
                </div>
            </div>
        )
}
    
export default Foods;