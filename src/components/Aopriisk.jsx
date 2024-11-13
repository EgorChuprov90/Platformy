import { useState } from "react";
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

function Aopriisk() { 
    const [isActive, setIsActive] = useState(false); 
    const ref = useRef(null) 
    const handleClickOutside = () => { 
      setIsActive(false) 
    } 
    useOnClickOutside(ref, handleClickOutside) 
     
    return ( 
        <div ref={ref} onClick={() => setIsActive(!isActive)} className="expa__accordion"> 
      <div>
      <p className="expa__accordion_title">АО «Прииск Удерейский»</p> 
      <p className="expa__accordion_subtitle"><span></span>Красноярский край, г. Красноярск, ул. Дубенского, д. 4, к. 1, офис 203</p>
      </div>
       <ul className={!isActive ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">Поисковые работы на рудное золото в границе лицензионного участка
      с локализацией и оценкой прогнозных ресурсов золота категории P1</li> 
      </ul> 
      </div>
       
      ); 
  } 
   
  export default Aopriisk;