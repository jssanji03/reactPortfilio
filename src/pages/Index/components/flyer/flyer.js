import React from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
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
                        <div className="content-overlay"></div>
                        <img src={design1} />
                        <div className="content-details fadeIn-bottom">
                            <Link to="/CareFlyer"><h3 className="content-title">平面設計</h3></Link>
                            {/* <a href="https://jssanji03.github.io/work/jess-package.html">
                                <h3 className="content-title">產品包裝</h3>
                            </a> */}
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="box">
                        <div className="content-overlay"></div>
                        <img src={design2}/>
                        <div className="content-details fadeIn-bottom">
                            <Link to="/CareFlyer"><h3 className="content-title">產品包裝</h3></Link>
                            {/* <a href="https://jssanji03.github.io/work/jess-package.html">
                                <h3 className="content-title">產品包裝</h3>
                            </a> */}
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="box">
                        <div className="content-overlay"></div>
                        <img src={design3} />
                        <div className="content-details fadeIn-bottom">
                            <a href="https://jssanji03.github.io/work/jess-cis.html">
                                <h3 className="content-title">ＣＩＳ</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="box">
                        <div className="content-overlay"></div>
                        <img src={design4}/>
                        <div className="content-details fadeIn-bottom">
                            <a href="https://jssanji03.github.io/work/jess-banner.html">
                                <h3 className="content-title">Banner</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="box">
                        <div className="content-overlay"></div>
                        <img src={design5}/>
                        <div className="content-details fadeIn-bottom">
                            <a href="https://jssanji03.github.io/work/jess-edm.html">
                                <h3 className="content-title">EDM</h3>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="box">
                        <div className="content-overlay"></div>
                        <img src={design6}/>
                        <div className="content-details fadeIn-bottom">
                            <a href="https://jssanji03.github.io/work/jess-web.html">
                                <h3 className="content-title">Website</h3>
                            </a>
                        </div>
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
