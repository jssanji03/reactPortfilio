import React from 'react';
import { Link } from "react-router-dom";
import './flyer.scss';
import design1 from './images/01.jpg';
import design2 from './images/02-2.jpg';
import design3 from './images/03.jpg';
import design4 from './images/04.jpg';
import design5 from './images/05.jpg';
import design6 from './images/06.jpg';


function Flyer() {
  return (
      <>
        <div className="row customCard mx-auto gallery mt-5">
                <h3 className="title text-center" id="bookmark">作品集</h3>
                <div className="col-4">
                  <div className="box">
                    <Link to="/careFlyer">
                        <div className="content-overlay"></div>
                        <img src={design1} alt=""/>
                        <div className="content-details fadeIn-bottom">
                            <h3 className="content-title">平面設計</h3>
                          </div>
                    </Link>
                    </div>
                </div>
                <div className="col-4">
                  <div className="box">
                    <Link to="/packages">
                        <div className="content-overlay"></div>
                        <img src={design2} alt=""/>
                        <div className="content-details fadeIn-bottom">
                            <h3 className="content-title">產品包裝</h3>
                          </div>
                    </Link>
                    </div>
                </div>
                <div className="col-4">
                    <div className="box">
                    <Link to="/Cis">
                        <div className="content-overlay"></div>
                        <img src={design3}  alt=""/>
                      <div className="content-details fadeIn-bottom">
                          <h3 className="content-title">CIS</h3>
                          </div>
                    </Link>
                    </div>
                </div>
                <div className="col-4">
                  <div className="box">
                        <Link to="/banner">
                        <div className="content-overlay"></div>
                        <img src={design4} alt=""/>
                        <div className="content-details fadeIn-bottom">
                            <h3 className="content-title">Banner</h3>
                          </div>
                        </Link>
                    </div>
                </div>
                <div className="col-4">
                  <div className="box">
                    <Link to="/EDM">
                        <div className="content-overlay"></div>
                        <img src={design5} alt=""/>
                        <div className="content-details fadeIn-bottom">
                            <h3 className="content-title">EDM</h3>
                          </div>
                    </Link>
                    </div>
                </div>
                <div className="col-4">
                  <div className="box">
                    <Link to="/webSite">
                        <div className="content-overlay"></div>
                        <img src={design6}/>
                        <div className="content-details fadeIn-bottom">
                        <h3 className="content-title">Website <br/>& <br/>UI/UX</h3>
                        </div>
                    </Link>
                    </div>
                </div>
                <div className="col-12">
                    <div className="jess-link">
                        <a href="https://issuu.com/jesssung/docs/final-s">更多作品</a>
                    </div>
                </div>
            </div>
    </>
  );
}

export default Flyer;
