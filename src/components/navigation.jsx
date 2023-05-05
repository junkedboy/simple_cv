import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation, } from 'react-router-dom'
import css from '../styles/navigation.module.sass'
import { languageSwitcher } from "./languageSwitcher.js"
import { setLanguage } from '../store/language';
import photo from "../assets/img/photo.png"
// import { eng , ukr } from "./localization.js"

const Navigation = () => {
    const location = useLocation()
    const [activeButton, setActiveButton] = useState(location.pathname.slice(1))
    const [toggleMenu, setToggleMenu] = useState(false)
    const dispatch = useDispatch()
    function navigateAndClose (item) {
        setActiveButton(item)
        setToggleMenu(current => !current)
    }
    
    // const language = useSelector(state => state.language.value)
    // function languageSwitcher () {
        
    //     if (language === "eng") {
    //         return eng
    //     }
    //     if (language === "ukr") {
    //         return ukr
    //     }
    // }

    return (
        
        <div className={css.main}>
            <div className={css.head}>
                <h1 className={css.head__name}>{languageSwitcher().name}</h1>
                
                <img className={css.head__photo} src={photo} alt="justMe:3" />
                <span className={css.head__degree}>{languageSwitcher().degree}</span>
                <h3 className={css.head__position}>{languageSwitcher().position}</h3>
            </div>

            <div className={css.headMobile}>
                <img className={css.headMobile__photo} src={photo} alt="justMe:3" />
                <div className={css.headMobile__textBox}>
                    <h1 className={css.headMobile__name}>{languageSwitcher().name}</h1>
                    <span className={css.headMobile__degree}>{languageSwitcher().degree} </span>
                    <h3 className={css.headMobile__position}>
                        {languageSwitcher().position}
                    </h3>
                </div>
            </div>

            <div onClick={() => setToggleMenu(current => !current)} className={css.menuToggle}>
                {!toggleMenu ? <i class="fa-solid fa-chevron-down"></i> : <i class="fa-solid fa-chevron-up"></i>}
                
                <span>{languageSwitcher().menu}</span>
                {!toggleMenu ? <i class="fa-solid fa-chevron-down"></i> : <i class="fa-solid fa-chevron-up"></i>}
            </div>
            <ul className={[css.navigation, !toggleMenu && css.disabled].join(' ')}>
                {languageSwitcher().navigation.map(item => (
                    <li key={item[1]}
                        onClick={() => navigateAndClose(item[1])} 
                        className={[css.navigation__item, activeButton === item[1] && css.active].join(' ')}
                    >
                        <Link to={'/' + item[1]}>
                            <a href="">{item[0]}</a>
                        </Link>
                    </li>
                ))}
            </ul>

            <div className={css.social}>
                <a href="http://t.me/someguy"><i className="fa-brands fa-telegram"></i></a>
                <a href="https://www.instagram.com/someguy/"><i className="fa-brands fa-instagram"></i></a>
                <a href="https://github.com/junkedboy"><i className="fa-brands fa-github"></i></a>
                <select onChange={(e) => dispatch(setLanguage(e.target.value))} className={css.selector}>
                    <option defaultValue value='eng'>English</option>
                    <option value='ukr'>Українська</option>
                </select>
            </div>
        </div>
    );
}

export default Navigation;

