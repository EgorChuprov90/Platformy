import React from "react";
import arrowLeft from '../img/arrowLeft.png'
import sgdConditions from '../img/sgdConditions.png'
import tilda from '../img/tilda.png'
import principle from '../img/principle.png'
import principleM from '../img/sgdM.png'
import { Link } from 'react-router-dom'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import sgd1 from '../img/sgd/sgd1.png'
import sgd2 from '../img/sgd/sgd2.png'
import sgd3 from '../img/sgd/sgd3.png'

function Sgd() {

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
<section className="sgd">
      <div className="container">
        <Link to='/services' className="sgd__title"><img src={arrowLeft} alt="Назад" /><p>Скважинная гидродобыча</p></Link>
        <p className="sgd__subtitle"><strong>Метод СГД</strong> заключается в добыче твердых полезных ископаемых через <br/> скважины без проведения вскрышных работ</p>
        <div className="sgd__tech">
            <div className="sgd__tech_text">
                <p className="sgd__tech_title">Базовые принципы технологии:</p>
                <ul className="sgd__tech_list">
                    <li className="sgd__tech_item"><p>1.</p><p>Вода, подаваемая под давлением, разрушает продуктивный пласт</p></li>
                    <li className="sgd__tech_item"><p>2.</p><p>Разрушенный грунт доставляется к забою эксплуатационной скважины и поднимается на поверхность с помощью эрлифта или гидроэлеватора в виде пульпы</p></li>
                    <li className="sgd__tech_item"><p>3.</p><p>На поверхности пульпа подается на специальный прибор для промывки</p></li>
                </ul>
            </div>
            <p className="sgd__subtitle_mobile"><strong>Метод СГД</strong> заключается в добыче твердых полезных ископаемых через <br/> скважины без проведения вскрышных работ</p>
            <div className="sgd__slider">
                        <button className="slick_prev" onClick={() => slider?.current?.slickPrev()}></button>
                            <Slider ref={slider} {...settings}>
                                <img src={sgd1} alt="" className="test" />
                                <img src={sgd2} alt="" className="test" />
                                <img src={sgd3} alt="" className="test" />  
                            </Slider>
                        <button className="slick_next" onClick={() => slider?.current?.slickNext()}></button>        
                    </div>
                    
        </div>
        <p className="sgd__principle_title">Преимущества технологии:</p>
        <img src={principle} alt="" className="sgd__principle_img" />
        <img src={principleM} alt="" className="sgd__principle_mobile" />
        <div className="sgd__conditions">
        <img src={sgdConditions} alt="" className="sgd__conditions_img" />
            <div className="sgd__conditions_text">
                <p className="sgd__conditions_title">Внедрение технологии:</p>
                <ul className="sgd__conditions_list">
                    <li className="sgd__conditions_item"><img src={tilda} alt="tilda" /><p>Оборудование водозабора на поверхности</p></li>
                    <li className="sgd__conditions_item"><img src={tilda} alt="tilda" /><p>Повышенная дисперсность грунтов является преимуществом</p></li>
                    <li className="sgd__conditions_item"><img src={tilda} alt="tilda" /><p>Наличие мерзлоты в разрезе повышает объем добычи</p></li>
                    <li className="sgd__conditions_item"><img src={tilda} alt="tilda" /><p>Глубина продуктивного пласта от 15 м. до 200 м.</p></li>
                    <li className="sgd__conditions_item"><img src={tilda} alt="tilda" /><p>Породы продуктивного пласта должны разрушаться струей воды</p></li>
                    <li className="sgd__conditions_item"><img src={tilda} alt="tilda" /><p>Возможна отработка продуктивных пластов большой мощности с малым содержанием </p></li>
                    <li className="sgd__conditions_item"><img src={tilda} alt="tilda" /><p>Обводненность продуктивного пласта является преимуществом</p></li>
                    <li className="sgd__conditions_item"><img src={tilda} alt="tilda" /><p>География применения - вся территория России</p></li>
                </ul>
            </div>
        </div>
      </div>
</section>
    );
}

export default Sgd;