import {useRef} from 'react';
import number1 from "../img/01.png";
import number2 from "../img/02.png";
import number3 from "../img/03.png";
import number1M from "../img/01M.png";
import number2M from "../img/02M.png";
import number3M from "../img/03M.png";
import target from "../img/target.png"
import idea from "../img/idea.png"

function About() {

    const ref = useRef(null);
    const handleClick = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
    };

  return (
    <div>
       <section className="preview">
      <div className="container">
              <div className="headline">
                  <p className="headline__name">ООО «морские платформы»</p>
                  <h1 className="headline__direction">Геологоразведка</h1>
                  <div className="pip"><p className="headline__about land">На суше</p>
                  <p className="headline__about sea">На воде</p></div>
                  <button onClick={handleClick} className="headline__more">Подробнее</button>
              </div>
          </div>
   </section>
    <section ref={ref} className="about">
        <div className="container">
        <div className="about__text">
            <h2 className="about__title">о компании</h2>
            <div className="about__history">
            <p className="text">Геологоразведочная компания ООО «Морские платформы» создана
                в 2018 году для выполнения уникальных и технически сложных работ
                в труднодоступных морских и сухопутных районах.
            </p>
            <p className="text">Опыт выполнения инженерных изысканий и геологоразведки включает
                в себя объекты по всей территории России, от Кольского п-ова до Камчатки.
            </p>
            <p className="text">Заказчиками работ являлись крупнейшие российские компании, 
                в том числе ПАО «ГАЗПРОМ», ПАО «НОВАТЭК», ПАО НК «Роснефть»,
                АО «ЛенморНИИпроект», АО «Полиметалл», ООО «ВОСТОК ОЙЛ» и др.
            </p>
            <p className="text"><strong>Основные активы компании</strong> – буровые геологоразведочные станки 
                и самоподъемные платформы, в т.ч. флагман «Фёдор Ушаков» и постоянно задействованы в Арктическом регионе для работы с российскими 
                и иностранными компаниями.
            </p>
            </div>    
        </div>
        </div>
        <div className="mountain"></div>
        <div className="container">
            <div className="advantages">
                <div className="advantages__purpose target">
                    <img src={target} alt="target" className="target__logo" />
                    <p className="target__title">Цель создания компании</p>
                    <p className="target__text">– бурение на суше и в море, добыча полезных ископаемых уникальным  методом скважинной гидродобычи (СГД)</p>
                </div>
                <div className="advantages__idea target">
                    <img src={idea} alt="idea" className="target__logo" />
                    <p className="target__title">Идея развития компании</p>
                    <p className="target__text"> – получение добавочной стоимости при выполнении уникальных и технически сложных работ в труднодоступных морских и сухопутных районах.</p>
                </div>
                <div className="advantages__title">Основные векторы развития</div>
                <div className="advantages__vector">
                    <div className="vector__card">
                        <img src={number1} alt="01" className="card__number card__number_pc" />
                        <img src={number1M} alt="01" className="card__number card__number_mobile" />
                        <div className="card__text">
                        Поиск и разведка сухопутных месторождений твердых полезных ископаемых
                        </div>
                    </div>
                    <div className="vector__card">
                        <img src={number2} alt="02" className="card__number card__number_pc" />
                        <img src={number2M} alt="02" className="card__number card__number_mobile" />
                        <div className="card__text">
                        Добыча золота и других россыпных твердых полезных ископаемых с помощью уникальной методики СГД на глубинах
                        от 20 до 500 м
                        </div>
                    </div>
                    <div className="vector__card">
                        <img src={number3} alt="03" className="card__number card__number_pc" />
                        <img src={number3M} alt="03" className="card__number card__number_mobile" />
                        <div className="card__text">
                        Морское бурение и статическое зондирование (СРТ) с буровых платформ и специализированных судов
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    </section> 
    </div>
    
  );
}

export default About;