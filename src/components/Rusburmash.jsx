import { useState } from "react";
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

function Rusburmash() { 
    const [isActive, setIsActive] = useState(false); 
    const ref = useRef(null) 
    const handleClickOutside = () => { 
      setIsActive(false) 
    } 
    useOnClickOutside(ref, handleClickOutside) 
     
    return ( 
        <div ref={ref} onClick={() => setIsActive(!isActive)} className="expa__accordion"> 
      <div>
      <p className="expa__accordion_title">Росатом 
      / АО «РУСБУРМАШ»</p> 
      <p className="expa__accordion_subtitle"><span></span>г. Москва, Большой Дровяной пер., д. 22</p>
      </div>
       <ul className={!isActive ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">Буровые и геологические работы на участке
«Быстринский» месторождении меди, рудного золота, железа и серебра
по проекту опережающей эксплуатационной разведки на 2022- 2024 гг</li> 
      </ul> 
      </div>
       
      ); 
  } 
   
  export default Rusburmash;