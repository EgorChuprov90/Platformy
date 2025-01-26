import { useState } from "react";
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

function Asphalt() { 
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false); 
    const ref = useRef(null) 
    const handleClickOutside = () => { 
      setIsActive(false)
    } 
    useOnClickOutside(ref, handleClickOutside)

    const ref1 = useRef(null) 
    const handleClickOutside1 = () => { 
      setIsActive1(false) 
    } 
    useOnClickOutside(ref1, handleClickOutside1)
     
     
    return ( 
        <div>
          <div ref={ref} onClick={() => setIsActive(!isActive)} className="expa__accordion"> 
      <div>
      <div className="expa__accordion_button">
      <p className="expa__accordion_title">ООО «Асфальтит»</p>   
          <svg className={!isActive ?"preeminence__card_close" : "preeminence__card_open"} width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4967 6.33785L0.5 0V3.64926L12.4967 10L24.5 3.64926V0L12.4967 6.33785Z"/>
<path d="M12.4967 14.9716L0.5 8V12.0142L12.4967 19L24.5 12.0142V8L12.4967 14.9716Z"/>
</svg>  
        </div>
      <p className={!isActive ? "expa__accordion_subtitle" : "expa__accordion_subtitle expa__accordion_active"}><span></span>обл. Оренбургская, г. Бузулук, 
      ул. Заречная, д. 6, офис 3</p>
      </div>
       <ul className={!isActive ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">Геологическое изучение недр (поиск
и оценка месторождений твердых полезных ископаемых) Ивановского и Казанского участков недр в Бугурусланском
и Асекеевском муниципальном районах Оренбургской области</li>
<li className="expa__accordion_item">Геологическое изучение недр Ивановского и Казанского участков недр, 
 расположенных в Бугурусланском
и Асекеевском муниципальном районах Оренбургской области</li> 
      </ul> 
      </div>
      <div ref={ref1} onClick={() => setIsActive1(!isActive1)} className="expa__accordion"> 
      <div>
      
      <div className="expa__accordion_button">
      <p className="expa__accordion_title">ООО «ВЭБ Инжиниринг»</p> 
          <svg className={!isActive1 ?"preeminence__card_close" : "preeminence__card_open"} width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4967 6.33785L0.5 0V3.64926L12.4967 10L24.5 3.64926V0L12.4967 6.33785Z"/>
<path d="M12.4967 14.9716L0.5 8V12.0142L12.4967 19L24.5 12.0142V8L12.4967 14.9716Z"/>
</svg>  
        </div>
      <p className={!isActive1 ? "expa__accordion_subtitle" : "expa__accordion_subtitle expa__accordion_active"}><span></span>г. Москва, Новинский бульвар, д. 31, пом. II, ком. 16</p>
      </div>
       <ul className={!isActive1 ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">Работы по выполнению комплексной геолого-прогнозной оценки минерально- сырьевой базы минеральных ресурсов скарново- магнетитовых
      и титаномагнетитовых железных руд Кувандыкского района Оренбургской области</li> 
      </ul> 
      </div>  
        </div>
        
       
      ); 
  } 
   
  export default Asphalt;