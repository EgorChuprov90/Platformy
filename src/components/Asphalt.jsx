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
      <p className="expa__accordion_title">ООО «Асфальтит»</p> 
      <p className="expa__accordion_subtitle"><span></span>обл. Оренбургская, г. Бузулук, 
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
      <p className="expa__accordion_title">ООО «ВЭБ Инжиниринг»</p> 
      <p className="expa__accordion_subtitle"><span></span>г. Москва, Новинский бульвар, д. 31, пом. II, ком. 16</p>
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