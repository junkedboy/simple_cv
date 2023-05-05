import React from 'react';
import css from '../styles/footer.module.sass'
import { setLanguage } from '../store/language'
import { useDispatch } from 'react-redux';

const Footer = () => {
    const dispatch = useDispatch()
    return (
        <div className={css.footer}>
            <div className={css.footer__social}>
                <a href="http://t.me/junkedboy"><i className="fa-brands fa-telegram"></i></a>
                <a href="https://www.instagram.com/junkedboy/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/junkedboy"><i className="fa-brands fa-github"></i></a>
            </div>
            <select onChange={(e) => dispatch(setLanguage(e.target.value))} className={css.selector}>
                <option defaultValue value='eng'>English</option>
                <option value='ukr'>Українська</option>
            </select>
        </div>
    );
}

export default Footer;
