import { useState } from "react";
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

function Kolaggk() { 
    const [isActive, setIsActive] = useState(false); 
    const ref = useRef(null) 
    const handleClickOutside = () => { 
      setIsActive(false) 
    } 
    useOnClickOutside(ref, handleClickOutside) 
     
    return ( 
        <div ref={ref} onClick={() => setIsActive(!isActive)} className="expa__accordion"> 
      <div>
      
      <div className="expa__accordion_button">
      <p className="expa__accordion_title">ООО «Кольская ГГК»</p>  
          <svg className={!isActive ?"preeminence__card_close" : "preeminence__card_open"} width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4967 6.33785L0.5 0V3.64926L12.4967 10L24.5 3.64926V0L12.4967 6.33785Z"/>
<path d="M12.4967 14.9716L0.5 8V12.0142L12.4967 19L24.5 12.0142V8L12.4967 14.9716Z"/>
</svg>  
        </div> 
      <p className={!isActive ? "expa__accordion_subtitle" : "expa__accordion_subtitle expa__accordion_active"}><span></span>обл. Мурманская, г. Мончегорск,
      пр-кт Металлургов, д. 2а</p>
      </div>
       <ul className={!isActive ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">Проведение буровых
и сопутствующих работ
на участках Промежуточный, Оленинский</li> 
      </ul> 
      </div>
       
      ); 
  } 
   
  export default Kolaggk;