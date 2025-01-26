import { useState } from "react";
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

function Dikson() { 
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);  
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

    const ref2 = useRef(null) 
    const handleClickOutside2 = () => { 
      setIsActive2(false) 
    } 
    useOnClickOutside(ref2, handleClickOutside2)
     
     
    return (
        <div>
          <div ref={ref} onClick={() => setIsActive(!isActive)} className="expa__accordion">
      <div>
        <div className="expa__accordion_button">
         <p className="expa__accordion_title">ПАО «Новатэк»
      / ООО «ИнжГео» </p> <svg className={!isActive ?"preeminence__card_close" : "preeminence__card_open"} width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4967 6.33785L0.5 0V3.64926L12.4967 10L24.5 3.64926V0L12.4967 6.33785Z"/>
<path d="M12.4967 14.9716L0.5 8V12.0142L12.4967 19L24.5 12.0142V8L12.4967 14.9716Z"/>
</svg>  
        </div>
       
      <p className={!isActive ? "expa__accordion_subtitle" : "expa__accordion_subtitle expa__accordion_active"}><span>ООО «Инженерная геология»</span>г. Москва, ул. Миклухо-Маклая,
      д. 36А, этаж 5, ПОМ XXIII К 76-84</p>
      </div>
       <ul className={!isActive ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">Завод по производству, хранению, отгрузке сжиженного природного газа и стабильного газового конденсата на основаниях гравитационного типа. 2-я очередь.
      (Завод СПГ и СГК на ОГТ. 2-я очередь)</li> 
      </ul> 
      </div>
      <div ref={ref1} onClick={() => setIsActive1(!isActive1)} className="expa__accordion"> 
      <div>
      
      <div className="expa__accordion_button">
      <p className="expa__accordion_title">ПАО «Газпром»</p>   
          <svg className={!isActive1 ?"preeminence__card_close" : "preeminence__card_open"} width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4967 6.33785L0.5 0V3.64926L12.4967 10L24.5 3.64926V0L12.4967 6.33785Z"/>
<path d="M12.4967 14.9716L0.5 8V12.0142L12.4967 19L24.5 12.0142V8L12.4967 14.9716Z"/>
</svg>  
        </div>
      <p className={!isActive1 ? "expa__accordion_subtitle" : "expa__accordion_subtitle expa__accordion_active"}><span></span>г. Санкт-Петербург, пр-кт Лахтинский, д. 2, корп. 3, стр. 1</p>
      </div>
       <ul className={!isActive1 ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">месторождение Северокаменномысское море, Морские буровые работы, CPT</li>
      <li className="expa__accordion_item">Каменномысское море, Морские буровые работы, CPT</li>  
      </ul> 
      </div>
      <div ref={ref2} onClick={() => setIsActive2(!isActive2)} className="expa__accordion"> 
      <div>
       
      <div className="expa__accordion_button">
      <p className="expa__accordion_title">ООО «ВУ-Диксон»</p>   
          <svg className={!isActive2 ?"preeminence__card_close" : "preeminence__card_open"} width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4967 6.33785L0.5 0V3.64926L12.4967 10L24.5 3.64926V0L12.4967 6.33785Z"/>
<path d="M12.4967 14.9716L0.5 8V12.0142L12.4967 19L24.5 12.0142V8L12.4967 14.9716Z"/>
</svg>  
        </div>
      <p className={!isActive2 ? "expa__accordion_subtitle" : "expa__accordion_subtitle expa__accordion_active"}><span></span>Красноярский край, р-н Таймырский Долгано-Ненецкий, пгт Диксон, ул. Воронина, д. 2А</p>
      </div>
       <ul className={!isActive2 ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">Выполнение комплекса поисковых
      и оценочных работ на территории Таймырского Долгано-Ненецкого муниципального района Красноярского края</li>  
      </ul> 
      </div>  
        </div>
        
       
      ); 
  } 
   
  export default Dikson;