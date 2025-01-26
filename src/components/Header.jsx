import logo from "../img/logo.svg";
import { useRef, useState } from "react";
import { useOnClickOutside } from 'usehooks-ts'
import { NavLink } from 'react-router-dom';
import burger from "../img/burger.png";

function Header() {

  const [isOn, setIsOn] = useState(false);
  const ref = useRef(null) 
  const handleClickOutside = () => { 
    setIsOn(false) 
  } 
  useOnClickOutside(ref, handleClickOutside) 
  return (
    <div className="container menu__container">
    <div className="menu menu_pc">
        <img className="menu__logo" src={logo} alt="Морские Платформы" /*width="255px" height="75px"*//>
        <nav className="menu__list">
            <NavLink to='/'  className={({isActive}) => (isActive ? 'menu__link active' : 'menu__link')}>О компании</NavLink>
            <NavLink to='/services' className={({isActive}) => (isActive ? 'menu__link active' : 'menu__link')}>Услуги</NavLink>
            <NavLink to='/technic' className={({isActive}) => (isActive ? 'menu__link active' : 'menu__link')}>Техника</NavLink>
            <NavLink to='/experience' className={({isActive}) => (isActive ? 'menu__link active' : 'menu__link')}>Опыт и география</NavLink>
            <NavLink to='/contacts' className={({isActive}) => (isActive ? 'menu__link active' : 'menu__link')}>Контакты</NavLink>
        </nav>
        
    </div>
    <div ref={ref} className="menu_mobile_wrapper">
        <div className='menu menu_mobile'>
      <img className="menu__logo_mobile" src={logo} alt="Морские Платформы" />
      <img className={!isOn ? "menu__burger" : "menu__burger menu__burger_rotate"} src={burger} alt="Меню" onClick={() => (setIsOn(!isOn))}/>
    </div>
    <nav className={isOn ? "menu__list_mobile" : "menu__list_mobile menu__list_hidden"}>
            <NavLink  to='/' className='menu__link_mobile ' onClick={() => (setIsOn(!isOn))}>О компании</NavLink>
            <NavLink to='/services' className='menu__link_mobile ' onClick={() => (setIsOn(!isOn))}>Услуги</NavLink>
            <NavLink to='/technic' className='menu__link_mobile ' onClick={() => (setIsOn(!isOn))}>Техника</NavLink>
            <NavLink to='/experience' className='menu__link_mobile ' onClick={() => (setIsOn(!isOn))}>Опыт и география</NavLink>
            <NavLink to='/contacts' className='menu__link_mobile ' onClick={() => (setIsOn(!isOn))}>Контакты</NavLink>
        </nav>  
      </div>

    </div>
  );
}

export default Header;