import { useState } from "react";
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

function Inzh() { 
    const [isActive, setIsActive] = useState(false); 
    const ref = useRef(null) 
    const handleClickOutside = () => { 
      setIsActive(false) 
    } 
    useOnClickOutside(ref, handleClickOutside) 
     
    return ( 
        <div ref={ref} onClick={() => setIsActive(!isActive)} className="expa__accordion"> 
      <div>
      <p className="expa__accordion_title">ПАО «Роснефть» 
      / ООО «ИнжГео»</p> 
      <p className="expa__accordion_subtitle"><span>ООО «Инженерная геология»</span>г. Москва, ул. Миклухо-Маклая, д. 36А, этаж 5, ПОМ XXIII К 76-84</p>
      </div>
       <ul className={!isActive ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">Нефтяной терминал «Порт бухта Север» 2 и 3 этапы</li> 
      </ul> 
      </div>
       
      ); 
  } 
   
  export default Inzh;