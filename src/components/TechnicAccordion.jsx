import React, { useState } from 'react';
import arrowDown from '../img/arrowDown.png'
import TechnicCard from './TechnicCard';

function TechnicAccordion(props) {
  const [isActive, setIsActive] = useState(true);
  return (
        <div className="technic__accordion">
          <div className="technic__accordion_title" onClick={() => setIsActive(!isActive)}>
            <p className="technic__accordion_subtitle">{props.title}</p>
            <svg className={isActive ?"preeminence__card_close" : "preeminence__card_open"} width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4967 6.33785L0.5 0V3.64926L12.4967 10L24.5 3.64926V0L12.4967 6.33785Z"/>
<path d="M12.4967 14.9716L0.5 8V12.0142L12.4967 19L24.5 12.0142V8L12.4967 14.9716Z"/>
</svg>
          </div>
          <ul className={isActive ? "technic__accordion_list technic__accordion_close" : "technic__accordion_list technic__accordion_open"}>
          {props.data.map(({ title, content, picture, count, id}) => (
        <TechnicCard key={id} title={title} content={content} picture={picture} count={count}/>
      ))}
      </ul>
        </div>
    );
}

export default TechnicAccordion;