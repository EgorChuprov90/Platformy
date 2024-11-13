import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowLeft from '../img/arrowLeft.png'
import tilda from '../img/tilda.png'

import geo1 from '../img/test/geo1.png';
import geo2 from '../img/test/geo2.png';
import geo3 from '../img/test/geo3.png';
import { Link } from "react-router-dom";

function Geological() {
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
<section className="geological">
<div className="container">
        <Link to='/services' className="geological__title"><img src={arrowLeft} alt="Назад" /><p>Геологоразведка</p></Link>
        <p className="geological__subtitle">В комплекс выполняемых работ входят:</p>
            <div className="geological__conditions">
            <p className="geological__subtitle geological__subtitle_mobile ">В комплекс выполняемых работ входят:</p>
                <ul className="geological__conditions_list">
                    <li className="geological__conditions_item"><img src={tilda} alt="tilda" /><p>Бурение вертикальных и наклонных скважин глубиной до 1200 п.м. диаметрами PQ, HQ, NQ, BQ, в том числе бурение в подземных выработках</p></li>
                    <li className="geological__conditions_item"><img src={tilda} alt="tilda" /><p>Горные работы по проходке канав и траншей</p></li>
                    <li className="geological__conditions_item"><img src={tilda} alt="tilda" /><p>Комплексное геофизическое исследование скважин</p></li>
                    <li className="geological__conditions_item"><img src={tilda} alt="tilda" /><p>Геологическое сопровождение бурения, включая документацию керна
                    с укладкой в керновые ящики; опробование и доставку проб</p></li>
                    <li className="geological__conditions_item"><img src={tilda} alt="tilda" /><p>Камеральные работы согласно Техническому Заданию, включая полевую обработку материалов</p></li>
                    <li className="geological__conditions_item"><img src={tilda} alt="tilda" /><p>Мобилизация и демобилизация людей, техники, топлива
                    и оборудования на участок</p></li>
                    <li className="geological__conditions_item"><img src={tilda} alt="tilda" /><p>Гидрогеологические исследования</p></li>
                    <li className="geological__conditions_item"><img src={tilda} alt="tilda" /><p>Разработка проектов ГРР, ТЭО временных и постоянных кондиций</p></li>
                    <li className="geological__conditions_item"><img src={tilda} alt="tilda" /><p>Лабораторные исследования в сторонней аккредитованной лаборатории</p></li>
                    </ul>
                    <div className="geological__slider">
                        <button className="slick_prev" onClick={() => slider?.current?.slickPrev()}></button>
                            <Slider ref={slider} {...settings}>
                                <img src={geo1} alt="" className="test" />
                                <img src={geo2} alt="" className="test" />
                                <img src={geo3} alt="" className="test" />  
                            </Slider>
                        <button className="slick_next" onClick={() => slider?.current?.slickNext()}></button>        
                    </div> 
                    </div>
</div>
</section>
    );
}

export default Geological;