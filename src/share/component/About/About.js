import React, { useState, useEffect } from 'react';
import './About.scss';


function About() {
  return (
    <>
      <div className="container">
        <div className="row customCard aboutMe">
                <div className="col-12 about ">
                    <h3 className="title">hi關於我</h3>
                    <span>
                        我是宋文荃，現階段經過資策會的專業訓練，投入前端工程師經歷約582小時，從網頁基礎架構的HTML、CSS到Bootsctrap與網頁響應版RWD，對於網站架構與語法應用已相當熟悉並實際應用在個人網站上。以網頁的架構上使用JavaScript達到功能的展現、更新內容與互動控制。搭配JQuery函式庫實做出一款小遊戲並了解其操作性質。
        
                        完整執行過專案為一電商網站，由團隊合作開發完成，從前端架構發想wireframe
                        到功能設計、畫面動態呈現與後端資料庫做串接都以完整網站做呈現。前端框架使用React，從專案中了解如何將程式碼之結構、樣式、邏輯從中Components模組化，並提高效能且重複管理使用。也學習後端技術PHP、MySQL、Node.js，並建立資料庫，以伺服器基礎架構達成ＣＲＵＤ能與前端學習接軌並整合應用。
        
                        前端設計方面Illustractor與Photoshop已相當熟悉並實際製作各種專案超過9年以上，也使用Adobe
                        XD製作網站的設計規範並統合，了解UI/UX的使用流程，並搭配使用Zeplin可以快速的傳達設計內容，體現色彩、字體、間距等各項細微的設定，更能確保網站的可被執行性。
        
                        過去做過9年的平面設計師，接觸眾多國內外商品。設計範圍含平面通路、網路通路、電視通路、
                        實體門市及公司網站維護與更新。設計超過100多個商品專案，並製作過各式雜誌稿、DM、公司CIS等專案，對於色彩敏銳度、排版與畫面呈現皆已相當熟悉，
        
                        從中經歷2年的主管職位並帶領過5人，對於跨部門溝通與協同合作專案經驗豐富，色彩與視覺呈現可以有效率的品質產出。以過往的經歷面對到網路的無遠弗屆、科技的日新月異，網路趨勢已年年向上攀升，了解未來網路商機的重要性，因此投入前端領域讓自己不斷的學習網路技術與如何創造出色的顧客體驗，善加運用自身的美學設計背景，去融入未來網路需求，創造更多的無限可能。
        
                    </span>
                </div>
                <div className="col-6 content mt-5">
                    <table>
                        <tr>
                            <td className="tdTitle">姓名</td>
                            <td>宋文荃</td>
                        </tr>
                        <tr>
                            <td className="tdTitle">信箱</td>
                            <td>jssanji03@gmail.com</td>
                        </tr>
                        <tr>
                            <td className="tdTitle">手機</td>
                            <td>0933930233</td>
                        </tr>
                        <tr>
                            <td className="tdTitle">生日</td>
                            <td>1988/07/23</td>
                        </tr>
                    </table>
                </div>
                <div className="col-6 content mt-5">
                    <table>
                        <tr>
                            <td className="tdTitle">地址</td>
                            <td>新北市</td>
                        </tr>
                        <tr>
                            <td className="tdTitle">Web</td>
                            <td ><a
                                    href="https://issuu.com/jesssung/docs/final-s">https://issuu.com/jesssung/docs/final-s</a>
                            </td>
                        </tr>
                        <tr>
                            <td className="tdTitle">職業</td>
                            <td>前端工程/設計師</td>
                        </tr>
                        <tr className="icon">
                            <td></td>
                            <td><i className="fab fa-instagram-square"></i><i className="fab fa-facebook-square"></i></td>
                        </tr>
                    </table>
                </div>
            </div>
      </div>
    </>
  );
}

export default About;