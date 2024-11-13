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
      <p className="expa__accordion_title">ООО «Кольская ГГК»</p> 
      <p className="expa__accordion_subtitle"><span></span>обл. Мурманская, г. Мончегорск,
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