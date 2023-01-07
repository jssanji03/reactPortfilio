import React, { useState, useEffect } from 'react';
import './Experience.scss';
// This example is live editable
import Fade from 'react-reveal/Fade';

const MyExp1 = () => {
    return (
        <>
            <Fade right>
            <div className="box item1">
                <h5>2006/03∼2010/03</h5>
                <p>亞洲大學 數位多媒體設計學系</p>
            </div>
            </Fade>
            <Fade left>
            <div className="box item2">
                <h5>2011/06∼2020/04</h5>
                <p className="vtitle">六員環股份有限公司</p>
                <ul className="ex-work">
                    <li>・ 公司整體形象規劃
                        <p>
                            設計範圍含平面通路、網路通路、電視通路、
                            實體門市及公司網站維護與更新。
                        </p>
                    </li>
                    <li>・ 品牌視覺設計
                        <p>
                            執行過100多個專案，代銷國內外品牌及自家品牌 、精美修圖、Logo設計、雜誌稿輸出、各式傳單及ＤＭ、商品包裝設計等視覺設計稿。
                        </p>
                    </li>
                    <li>・ 3間實體門市櫃位及陳列設計
                        <p>
                            東區門市與全台寶雅通路，展示櫃整體規劃及產品陳列、門市活動設計與展示架等籌備規
                            劃，並與廠商做溝通與配合
                        </p>
                    </li>
                    <li>・ 2場展覽會場及4場記者發表會設計
                        <p>
                            大陸子公司－上海美博會形象設計。
                            新品發表記者會之活動與廠商聯繫，活動整體形象規劃、邀請卡設計及各式形象稿
                        </p>
                    </li>
                    <li>・ 網站後台維護與更新
                        <p>
                            公司官網及各大通路平台之Banner、ＥＤＭ設計及維護公司網站整體形象規劃
                        </p>
                    </li>
                </ul>
            </div>
            </Fade>
            <Fade right>
            <div className="box item3">
                <h5>2020年/7月－582小時專業訓練</h5>
                <p className="vtitle">資訊工業策進會－前端工程師養成班</p>
                <p>1個團隊合作電商網站、2個個人網站
                    1個UI網站提案、1款小遊戲</p>
                <p>由團體合作設計網站，從主題發想、設計風格、概念
                    使用者介面設計、ＵＸ流程規劃、切版到程式開發。
                    使用React框架，後端為Node.js</p>
            </div>
            </Fade>
            <Fade right>
                <div className="box item4">
                    <h5>2020年/12月－</h5>
                    <p className="vtitle">碩益科技股份有限公司－前端工程師/UIUX</p>
                    <ul className="ex-work">
                        <li>・ 系統介面設計
                            <p>後台系統介面 Prototype 
                            依照客戶功能需求，搭配客戶風格及色系，使用HTML .JavaScript設計出可操作性的系統介面。</p>
                        </li>
                        <li>・ Vue框架資料串接
                            <p>後台系統介面 資料串接
                            使用 .Net 底層搭配 Vue 框架</p>
                        </li>
                        <li>・ 微軟powerApps 系統介面設計
                            <p>微軟powerApps 系統介面設計</p>
                        </li>
                    </ul>
                </div>
            </Fade>
        </>
    )
}
function Experience() {
  return (
      <>
            <div className="row customCard mx-auto experience mt-5">
                <h3 className="text-center" id="exp">工作經歷</h3>
                <section className="col-12 mt-5 experienceCard">
                    <MyExp1/>
                    <div className="separateLine">
                        <div className="line">
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <div className="circle3"></div>
                            <div className="circle4"></div>
                        </div>
                    </div>
                </section>
            </div>
    </>
  );
}

export default Experience;
