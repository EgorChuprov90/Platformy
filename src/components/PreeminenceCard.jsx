import React, { useState } from 'react';
import arrowDown from '../img/arrowDown.png'
import arrowUp from '../img/arrowUp.png'

function PreeminenceCard({ title, content, picture }) {
  const [isActive, setIsActive] = useState(false);
  return (
        <li className="preeminence__card" onClick={() => setIsActive(!isActive)}>
          <img src={picture} alt="Экскаватор погрузчик" className="preeminence__card_img" />
          <div className="preeminence__card_tittle">
            <p className="preeminence__card_subtittle">{title}</p>
            {!isActive ? <img src={arrowDown} alt="Стрелка вниз" className="preeminence__card_arrow" /> : <img src={arrowUp} alt="Стрелка вверх" className="preeminence__card_arrow" />}
          </div>
        {isActive && <p className="preeminence__card_text">{content}</p>}
        </li>
    );
}

export default PreeminenceCard;