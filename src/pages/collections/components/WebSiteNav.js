import React, { useState, useEffect, useRef,useLocation } from 'react';
import { NavLink,Link} from "react-router-dom";
import '../../FlyerLayout/Flyer.scss';


function Nav(props) {
    const {tab,setTab,setNavId}=props;
    function changeNavStatus(tabId) {
        console.log(tabId);
        setTab(() => { 
            return tab.map((item) => {
                if (item.tab === tabId) {
                setNavId(tabId);
                return {
                    tab: item.tab,
                    url:item.url,
                    active: true
                };
                } else {
                return {
                    tab: item.tab,
                    url:item.url,
                    active: false
                };
                }
            });
        })
    };
    return (
    <div>
        <div className="tabs">
                <Link to="/">My Portfilio</Link>
                {tab.map((item) => {
                    return (
                    <Link key={item.tab} className={item.active ? "active tab" : "tab"} to={item.url} onClick={() => {
                        changeNavStatus(item.tab);
                        }}>{item.tab}</Link>
                  );
                })}
        </div>
    </div>
    )
}

export default Nav;