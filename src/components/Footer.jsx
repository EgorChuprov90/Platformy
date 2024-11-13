import logoFooter from '../img/logoFooter.png'
import phone from '../img/phone.png'
import mail from '../img/mail.png'
import location from '../img/location.png'
import { Link } from 'react-router-dom';

function Footer() {
  return (
<footer className="footer">
  <div className="container">
    <div className="footer__logo">
      <img src={logoFooter} alt="Морские платформы" className="footer__logo_img" />
      <p className="footer__logo_text">ООО "Морские Платформы" © 2018-2024</p>
    </div>
    <nav className="footer__menu">
      <Link to="/" className="footer__menu_link">О компании</Link>
      <Link to="/services" className="footer__menu_link">Услуги</Link>
      <Link to='/technic' className="footer__menu_link">Техника</Link>
      <Link to='/experience' className="footer__menu_link">Опыт и география</Link>
      <Link to='/contacts' className="footer__menu_link">Контакты</Link>
    </nav>
    <div className="footer__contacts">
    <p className="footer__contacts_item">Контакты</p>
    <a href="tel:+79309308357" className="footer__contacts_item"><img src={phone} alt="" className="item__img" /> <p  className="item__link">+7 (930) 930-83-57</p></a>
    <a  href="mailto:info@searigs.ru" className="footer__contacts_item"><img src={mail} alt="" className="item__img" /> <p className="item__link">info@searigs.ru</p></a>
    <div className="footer__contacts_item"><img src={location} alt="" className="item__img" /> <p className="item__link">117279, Россия, Москва, ул. Миклухо-Маклая, 36А, Торгово-офисный центр «МЦ», офис 512А.</p></div>
    </div>
  </div>
</footer>
    );
}

export default Footer;