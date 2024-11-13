import { useState } from "react";
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

function Nork() { 
    const [isActive, setIsActive] = useState(false); 
    const ref = useRef(null) 
    const handleClickOutside = () => { 
      setIsActive(false) 
    } 
    useOnClickOutside(ref, handleClickOutside) 
     
    return ( 
        <div ref={ref} onClick={() => setIsActive(!isActive)} className="expa__accordion"> 
      <div>
      <p className="expa__accordion_title">АО «Полиметалл»
      / ООО «НОРК»</p> 
      <p className="expa__accordion_subtitle"><span>ООО «Новая охотская рудная компания»</span>Хабаровский край, г.о. г. Хабаровск, ул Шевченко, д. 22</p>
      </div>
       <ul className={!isActive ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">Работы по геологическому сопровождению геологоразведочных работ
      на лицензионном участке недр «Высокий», расположенном в Охотском районе Хабаровского края</li> 
      </ul> 
      </div>
       
      ); 
  } 
   
  export default Nork;