import map from "../img/map.png"
import mapM from "../img/mapM.png"
import phone from '../img/phone.png'
import mail from '../img/mail.png'
import location from '../img/location.png'

import React from 'react';

function Contacts() {
    return (
        <section className="contacts">
            <div className="container">
                <h2 className="contacts__title">Контакты</h2>
                <ul className="contacts__list">
                    <li className="contacts__item">
                        <img src={phone} alt="" className="contacts__img" />
                        <a href="tel:+79309308357" className="contacts__text">+7 (930) 930-83-57</a>
                    </li>
                    <li className="contacts__item">
                        <img src={mail} alt="" className="contacts__img" />
                        <a href="mailto:info@searigs.ru" className="contacts__text">info@searigs.ru</a>
                    </li>
                    <li className="contacts__item">
                        <img src={location} alt="" className="contacts__img" />
                        <p className="contacts__text">117279, Россия, Москва, ул. Миклухо-Маклая, 36А,
                        Торгово-офисный центр «МЦ», офис 512А.</p>
                    </li>
                </ul>
                <img src={map} alt="Карта" className="contacts__map" />
            </div>
            <img src={mapM} alt="Карта" className="contacts__map_mobile" />
        </section>
      );
  }
  
  export default Contacts;