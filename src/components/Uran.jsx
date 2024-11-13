import { useState } from "react";
import { useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

function Uran() { 
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
      <p className="expa__accordion_title">АО УГРК «Уранцветмет»</p> 
      <p className="expa__accordion_subtitle"><span></span>обл. Московская, Красногорский р-н,
      ш. Новорижское, 9 км, бизнес-центр «Рига Лэнд», стр. 5, п. 2,3</p>
      </div>
       <ul className={!isActive ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">Заверочные буровые работы на рудное золото
на месторождении Венера.
Разведочные работы
на рудное золото 
на месторождении Келлям</li> 
      </ul> 
      </div>
      <div ref={ref1} onClick={() => setIsActive1(!isActive1)} className="expa__accordion"> 
      <div>
      <p className="expa__accordion_title">ООО «Туора-Таас»</p> 
      <p className="expa__accordion_subtitle"><span></span>Республика Саха, г. Якутск,
      ул. Кальвица, д. 24, офис 211</p>
      </div>
       <ul className={!isActive1 ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">Заверочные работы
по колонковому бурению скважин с геологическим сопровождением
на месторождении Венера</li>
      </ul> 
      </div>
      <div ref={ref2} onClick={() => setIsActive2(!isActive2)} className="expa__accordion"> 
      <div>
      <p className="expa__accordion_title">GV GOLD / ПАО «Высочайший» / АО «ТЗРК»</p> 
      <p className="expa__accordion_subtitle"><span></span>Республика Саха (Якутия),
р-н Оймяконский улус,
пгт. Усть-Нера, ул. Ленина, д. 33</p>
      </div>
       <ul className={!isActive2 ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">Выполнение буровых работ
в Оймяконском районе Республики Саха (Якутия)
на участке недр «месторождение Дражное
в пределах Тарнского рудного поля в Республике Саха (Якутия) и участок недр «Центральная часть Тарынского рудного поля»</li>  
      </ul> 
      </div>  
        </div>
        
       
      ); 
  } 
   
  export default Uran;