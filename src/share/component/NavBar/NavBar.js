import React, { Component } from 'react'
import './NavBar.scss';


function NavBar() {
  return (
    <>
      <header className="header">
        <div className="nav_menulist">
            <ul className="nav">
                <li>
                    <a href="#" className="aboutme"></a>
                </li>
                <li>
                    <a href="#skill" className="jessskill"></a>
                </li>
                <li>
                    <a href="#exp" className="jessexp"></a>
                </li>
                <li>
                    <a href="#bookmark" className="Portfilio"></a>
                </li>
            </ul>
        </div>
      </header>
    </>
  );
}

export default NavBar;