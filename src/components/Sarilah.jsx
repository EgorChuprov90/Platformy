import { useState } from "react";
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

function Sarilah() { 
    const [isActive, setIsActive] = useState(false);
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);  
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

    const ref3 = useRef(null) 
    const handleClickOutside3 = () => { 
      setIsActive3(false) 
    } 
    useOnClickOutside(ref3, handleClickOutside3)
     
     
    return ( 
        <div>
          <div ref={ref} onClick={() => setIsActive(!isActive)} className="expa__accordion"> 
      <div>
      <div className="expa__accordion_button">
      <p className="expa__accordion_title">АО УГРК «Уранцветмет»</p>   
          <svg className={!isActive ?"preeminence__card_close" : "preeminence__card_open"} width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4967 6.33785L0.5 0V3.64926L12.4967 10L24.5 3.64926V0L12.4967 6.33785Z"/>
<path d="M12.4967 14.9716L0.5 8V12.0142L12.4967 19L24.5 12.0142V8L12.4967 14.9716Z"/>
</svg>  
        </div> 
      <p className={!isActive ? "expa__accordion_subtitle" : "expa__accordion_subtitle expa__accordion_active"}><span></span>обл. Московская, Красногорский р-н,
      ш. Новорижское, 9 км, бизнес-центр «Рига Лэнд», стр. 5, п. 2,3</p>
      </div>
       <ul className={!isActive ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">Выполнение поисковых
      и оценочных работ на объекте «Месторождение Тан»</li> 
      </ul> 
      </div>
      <div ref={ref1} onClick={() => setIsActive1(!isActive1)} className="expa__accordion"> 
      <div>
      
      <div className="expa__accordion_button">
       <p className="expa__accordion_title">АО «Сарылах Сурьма»</p>  
          <svg className={!isActive1 ?"preeminence__card_close" : "preeminence__card_open"} width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4967 6.33785L0.5 0V3.64926L12.4967 10L24.5 3.64926V0L12.4967 6.33785Z"/>
<path d="M12.4967 14.9716L0.5 8V12.0142L12.4967 19L24.5 12.0142V8L12.4967 14.9716Z"/>
</svg>  
        </div> 
      <p className={!isActive1 ? "expa__accordion_subtitle" : "expa__accordion_subtitle expa__accordion_active"}><span></span>Республика Саха/Якутия/, Улус Оймяконский, пгт. Усть-Нера, ул. Советская, д. 16</p>
      </div>
       <ul className={!isActive1 ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">Комплекс геологоразведочных работ на месторождении «Гайдар» в Оймяконском районе, Республики Саха, Якутия</li>
      </ul> 
      </div>
      <div ref={ref2} onClick={() => setIsActive2(!isActive2)} className="expa__accordion"> 
      <div>
      
      <div className="expa__accordion_button">
      <p className="expa__accordion_title">ООО «Гео САХА»</p>   
          <svg className={!isActive2 ?"preeminence__card_close" : "preeminence__card_open"} width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4967 6.33785L0.5 0V3.64926L12.4967 10L24.5 3.64926V0L12.4967 6.33785Z"/>
<path d="M12.4967 14.9716L0.5 8V12.0142L12.4967 19L24.5 12.0142V8L12.4967 14.9716Z"/>
</svg>  
        </div> 
      <p className={!isActive2 ? "expa__accordion_subtitle" : "expa__accordion_subtitle expa__accordion_active"}><span></span>г. Москва, 4-1 Лесной пер., д.11</p>
      </div>
       <ul className={!isActive2 ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">Комплекс поисковых
и оценочных работ
в пределах лицензионного участка на объекте «Месторождение Тан»
и на объекте «Месторождение Пиль (участок Малютка)
в республике Саха (Якутия)</li>  
      </ul> 
      </div>
      <div ref={ref3} onClick={() => setIsActive3(!isActive3)} className="expa__accordion"> 
      <div>
      
      <div className="expa__accordion_button">
      <p className="expa__accordion_title">ООО «ГеоПроМайнинг Верхне Менкече»</p>   
          <svg className={!isActive3 ?"preeminence__card_close" : "preeminence__card_open"} width="25" height="19" viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4967 6.33785L0.5 0V3.64926L12.4967 10L24.5 3.64926V0L12.4967 6.33785Z"/>
<path d="M12.4967 14.9716L0.5 8V12.0142L12.4967 19L24.5 12.0142V8L12.4967 14.9716Z"/>
</svg>  
        </div> 
      <p className={!isActive3 ? "expa__accordion_subtitle" : "expa__accordion_subtitle expa__accordion_active"}><span></span>Республика Саха/Якутия/, улус Томпонский, п. Хандыга, 
      ул. Магаданская, д. 4, помещение 13, эт. 1</p>
      </div>
       <ul className={!isActive3 ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">Комплекс геологоразведочных работ на месторождении «Хапчагай» в Оймяконском районе Республики Саха (Якутия)</li>  
      </ul> 
      </div>  
        </div>
        
       
      ); 
  } 
   
  export default Sarilah;