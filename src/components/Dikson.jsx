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
      <p className="expa__accordion_title">ПАО «Новатэк»
      / ООО «ИнжГео»</p> 
      <p className="expa__accordion_subtitle"><span>ООО «Инженерная геология»</span>г. Москва, ул. Миклухо-Маклая,
      д. 36А, этаж 5, ПОМ XXIII К 76-84</p>
      </div>
       <ul className={!isActive ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">Завод по производству, хранению, отгрузке сжиженного природного газа и стабильного газового конденсата на основаниях гравитационного типа. 2-я очередь.
      (Завод СПГ и СГК на ОГТ. 2-я очередь)</li> 
      </ul> 
      </div>
      <div ref={ref1} onClick={() => setIsActive1(!isActive1)} className="expa__accordion"> 
      <div>
      <p className="expa__accordion_title">ПАО «Газпром»</p> 
      <p className="expa__accordion_subtitle"><span></span>г. Санкт-Петербург, пр-кт Лахтинский, д. 2, корп. 3, стр. 1</p>
      </div>
       <ul className={!isActive1 ? "expa__accordion_list" : "expa__accordion_list expa__accordion_active"}> 
      <li className="expa__accordion_item">месторождение Северокаменномысское море, Морские буровые работы, CPT</li>
      <li className="expa__accordion_item">Каменномысское море, Морские буровые работы, CPT</li>  
      </ul> 
      </div>
      <div ref={ref2} onClick={() => setIsActive2(!isActive2)} className="expa__accordion"> 
      <div>
      <p className="expa__accordion_title">ООО «ВУ-Диксон»</p> 
      <p className="expa__accordion_subtitle"><span></span>Красноярский край, р-н Таймырский Долгано-Ненецкий, пгт Диксон, ул. Воронина, д. 2А</p>
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