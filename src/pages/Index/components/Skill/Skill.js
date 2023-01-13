import React, { useState, useEffect } from 'react';
import './Skill.scss';
const skills= {
    designSkill: [
        {id:1,skill:'- Adobe Photoshop'},
        {id:2,skill:'- Adobe Illustrator'},
        {id:3,skill:'- Adobe XD'},
        {id:4,skill:'- Prototype'},
        {id:5,skill:'- LOGO CIS'},
        {id:6,skill:'- 封面設計 產品包裝'},
        {id:7,skill:'- 印前輸出 色彩辨識'}
    ],
    jsSkill: [
        {id:8,skill:'- HTML / CSS / Sass'},
        {id:9,skill:'- 開發工具：VScode'},
        {id:10,skill:'- Bootstrap5'},
        {id:11,skill:'- Webpack'},
        {id:12,skill:'- JavaScript'},
        {id:13,skill:'- Vue.js'},
        {id:14,skill:'- JQuery'},
        {id:15,skill:'- React'},
        {id:16,skill:'- Git版本控制'},
    ]
}
const skillItem = skills.designSkill.map((item) => { 
    return <li className="col-6" key={item.id}>{item.skill}</li>
})
const JsItem = skills.jsSkill.map((item) => { 
    return <li className="col-6" key={item.id}>{item.skill}</li>
})
const MySkills = () => {
    return (
        <>
            <div className="col-6 skillItem mt-5">
                <h3 id="skill">設計技能</h3>
                <div>
                    <ul className="skill row">
                        { skillItem }
                    </ul>
                </div>
            </div>
            <div className="col-6 skillItem mt-5">
                <h3 id="skill">前端技能</h3>
                <div>
                    <ul className="skill row">
                        { JsItem }
                    </ul>
                </div>
            </div>
        </>
    )
}

function Skill() {
  return (
      <>
        <div className="row customCard mySkill mx-auto justify-content-between mt-5">
            <MySkills />
        </div>
    </>
  );
}

export default Skill;
