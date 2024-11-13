import { useState } from "react";
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

function Kolali() { 
    const [isActive, setIsActive] = useState(false); 
    const ref = useRef(null) 
    const handleClickOutside = () => { 
      setIsActive(false) 
    } 
    useOnClickOutside(ref, handleClickOutside) 
     
    return ( 
        <div ref={ref} onClick={() => setIsActive(!isActive)} className="expa__accordion"> 
      <div>
      <p className="expa__accordion_title">ООО «Кольский Литий»</p> 
      <p className="expa__accordion_subtitle"><span></span>г. Москва, пр-кт Вернадского,
д. 37, к. 1, этаж 1, помещение Х.
комната 12</p>
      </div>
       <ul className={!isActive ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">Проведение буровых
и сопутствующих работ
на участке Тоукант</li> 
      </ul> 
      </div>
       
      ); 
  } 
   
  export default Kolali;