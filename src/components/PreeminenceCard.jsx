import React, { useState } from 'react';
import arrowDown from '../img/arrowDown.svg'
import arrowUp from '../img/arrowUp.png'

function PreeminenceCard({ title, content, picture }) {
  const [isActive, setIsActive] = useState(false);
  return (
        <li className="preeminence__card" onClick={() => setIsActive(!isActive)}>
          <img src={picture} alt="Экскаватор погрузчик" className="preeminence__card_img" />
          <div className="preeminence__card_tittle">
            <p className="preeminence__card_subtittle">{title}</p>
             <svg className={!isActive ?"preeminence__card_close" : "preeminence__card_open"} width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4967 6.33785L0.5 0V3.64926L12.4967 10L24.5 3.64926V0L12.4967 6.33785Z"/>
<path d="M12.4967 14.9716L0.5 8V12.0142L12.4967 19L24.5 12.0142V8L12.4967 14.9716Z"/>
</svg>
          </div>
        {isActive && <p className="preeminence__card_text">{content}</p>}
        </li>
    );
}

export default PreeminenceCard;