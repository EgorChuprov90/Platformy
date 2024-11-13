import { useState } from "react";
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

function Popup({comp, name}) {
  const [isOn, setOn] = useState(false);
  const ref = useRef(null)
  const handleClickOutside = () => {
    setOn(false)
  }
  useOnClickOutside(ref, handleClickOutside)
  return (
     <div ref={ref} className={!isOn ? "popup "+name: "popup popup_open "+name}>
      <div className="popup__button" onClick={() => setOn(!isOn)}></div>
    <div className={!isOn ? "popup__content" : "popup__content popup__content_active"}>
     {comp}
    </div>
    </div>

    );
}

export default Popup;