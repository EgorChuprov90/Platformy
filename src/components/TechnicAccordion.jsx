import React, { useState } from 'react';
import arrowDown from '../img/arrowDown.png'
import TechnicCard from './TechnicCard';

function TechnicAccordion(props) {
  const [isActive, setIsActive] = useState(false);
  return (
        <div className="technic__accordion">
          <div className="technic__accordion_title" onClick={() => setIsActive(!isActive)}>
            <p className="technic__accordion_subtitle">{props.title}</p>
            <img src={arrowDown} alt="Стрелка вниз" className="technic__accordion_arrow" />
          </div>
          <ul className="technic__accordion_list">
          {props.data.map(({ title, content, picture, count, id}) => ( !isActive &&
        <TechnicCard key={id} title={title} content={content} picture={picture} count={count}/>
      ))}
      </ul>
        </div>
    );
}

export default TechnicAccordion;