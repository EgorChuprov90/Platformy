import { useState } from "react";
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

function PopupM({comp, name}) {
  const [isOn, setOn] = useState(false);
  const ref = useRef(null)
  const handleClickOutside = () => {
    setOn(false)
  }
  useOnClickOutside(ref, handleClickOutside)
  return (
     <div ref={ref} className={!isOn ? "popup "+name: "popup popup_open "+name}>
<svg className={!isOn ? "popup__button": "popup__button popup__button_open "} onClick={() => setOn(!isOn)} width="150" height="149" viewBox="0 0 150 149" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse className="circle3" cx="75" cy="74.4927" rx="75" ry="74.4927" fill="#1CBCAC" fill-opacity="0.3"/>
<circle className="circle2" cx="74.8375" cy="74.838" r="52.1598" fill="#008081" fill-opacity="0.7"/>
<circle className="circle1" cx="74.8377" cy="74.8387" r="30.6155" fill="#008081" />
</svg>
    <div className={!isOn ? "popup__content" : "popup__content popup__content_active"}>
     {comp}
    </div>
    </div>

    );
}

export default PopupM;