import React, { useState, useEffect } from 'react';
import me from './images/me.JPG';
import './Header.scss';


function Header() {
  return (
    <>
      <div className="container">
            <div className="row customCard aboutBg g-0 mx-auto">
                <div className="col-4 circle">
                    <img src={me}></img>
                </div>
                <div className="col-7 title">
                    <h2>Hi, I'm Jess. This is my profile.</h2>
                    <h1 className="vTitle">Portfilio</h1>
                </div>
            </div>
      </div>
    </>
  );
}
export default Header;