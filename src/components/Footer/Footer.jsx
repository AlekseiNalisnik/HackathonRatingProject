import React from 'react';
import { Link } from 'react-router-dom';
import { icons } from '../../../Data/icons';

const Footer = () => {

    return (
        <div className="footer">
            <div className="social">
                <p className="social_tag">Мы в социальных сетях</p>
                <div className="icons">
                    <img className="icons_img" src={icons[0].photo} />
                    <img className="icons_img" src={icons[1].photo} />
                    <img className="icons_img" src={icons[2].photo} />
                    <img className="icons_img" src={icons[3].photo} />
                    <img className="icons_img" src={icons[4].photo} />
                </div>
            </div>
            
            <div className="footer__inname">Подпишитесь на акции и анонсы событий</div>
            <form className="footer__form">
                <input className="footer__form__mail" type="text" placeholder="Оставьте здесь свою почту"/>
                <div className="footer__form__subscribe">Подписаться</div>
            </form>
        
            <div className="help">
                <Link to='/NewMain' className="help__link help__link_first">Вакансии</Link>
                <Link to='/NewMain' className="help__link">Реклама</Link>
                <Link to='/NewMain' className="help__link">Соглашение</Link>
                <Link to='/NewMain' className="help__link">Помощь</Link>
                <Link to='/NewMain' className="help__link">Исследования</Link>
                <Link to='/NewMain' className="help__link">Мобильная версия</Link>
            </div>
        </div>
    )
}

export default Footer;