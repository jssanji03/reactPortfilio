/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { HashLink} from 'react-router-hash-link';
import './NavBar.scss';


function NavBar() {
  return (
    <>
      <header className="header">
        <div className="nav_menulist">
            <ul className="nav">
              <li>
                <HashLink smooth to={"#"} className="aboutme"></HashLink>
              </li>
              <li>
                <HashLink smooth to={'#skill'} className="jessskill"></HashLink>
              </li>
              <li>
                <HashLink smooth to={'#exp'} className="jessexp"></HashLink>
                  </li>
              <li>
                <HashLink smooth to={'#bookmark'} className="Portfilio"></HashLink>
              </li>
            </ul>
        </div>
      </header>
    </>
  );
}

export default NavBar;