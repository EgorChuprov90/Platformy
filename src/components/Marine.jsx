import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from '../img/arrowLeft.png'
import tilda from '../img/tilda.png'

import marine1 from '../img/test/marine1.png';
import marine2 from '../img/test/marine2.png';
import marine3 from '../img/test/marine3.png';
import { Link } from "react-router-dom";

function Marine() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
      };
      const slider = React.useRef(null);
  return (
<section className="marine">
<div className="container">
        <Link to='/services' className="marine__title"><img src={arrowLeft} alt="Назад" /><p>морские изыскания</p></Link>
        <p className="marine__subtitle ">В комплекс выполняемых работ входят:</p>
            <div className="marine__conditions">
            <p className="marine__subtitle marine__subtitle_mobile">В комплекс выполняемых работ входят:</p>
            <ul className="marine__conditions_list">
                    <li className="marine__conditions_item"><img src={tilda} alt="tilda" /><p>Инженерно-геологические изыскания, в том числе бурение скважин
на акватории с палубы самоподъёмных платформ, СРТ (в т.ч. СРТu, TCPT, SCPTu и др.), отбор образцов грунтов, геофизические исследования, термометрия, лабораторные исследования, камеральные работы
и прохождение Главгосэкспертизы</p></li>
                    <li className="marine__conditions_item"><img src={tilda} alt="tilda" /><p>Инженерно-геодезические изыскания, в том числе гидрографические, построение каркасных и опорных сетей, закладка реперов, создание топографических планов и камеральная обработка материалов</p></li>
                    <li className="marine__conditions_item"><img src={tilda} alt="tilda" /><p>Инженерно-гидрометеорологические изыскания, в том числе ледовые исследования</p></li>
                    <li className="marine__conditions_item"><img src={tilda} alt="tilda" /><p>Инженерно-экологические изыскания, в том числе археологические исследования</p></li>
                    </ul>
                    <div className="marine__slider">
                        <button className="slick_prev" onClick={() => slider?.current?.slickPrev()}></button>
                            <Slider ref={slider} {...settings}>
                                <img src={marine1} alt="" className="test" />
                                <img src={marine2} alt="" className="test" />
                                <img src={marine3} alt="" className="test" />  
                            </Slider>
                        <button className="slick_next" onClick={() => slider?.current?.slickNext()}></button>        
                    </div> 
                    </div>
</div>
</section>
    );
}

export default Marine;