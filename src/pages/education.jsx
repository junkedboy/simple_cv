import React from 'react';
import css from '../styles/timeLine.module.sass'
import separator from '../assets/img/separator.png'
import { languageSwitcher } from "../components/languageSwitcher.js"

const Education = () => {
    return (
        <div className={css.timeLine}>

            <div className={css.timeLine__item}>
                <span>{languageSwitcher().education1[0]}</span>
                <h4>{languageSwitcher().education1[1]}</h4>
                <span>{languageSwitcher().education1[2]}</span>
                <p>{languageSwitcher().education1[3]}</p>
                <span>{languageSwitcher().education1[4]}</span>
                <p>{languageSwitcher().education1[5]}</p>
            </div>

            <img className='separator' src={separator} alt="|" />

            <div className={css.timeLine__item}>
                <span>{languageSwitcher().education2[0]}</span>
                <h4>{languageSwitcher().education2[1]}</h4>
                <span>{languageSwitcher().education1[2]}</span>
                <p>{languageSwitcher().education2[3]}</p>
                <span>{languageSwitcher().education1[4]}</span>
                <p>{languageSwitcher().education2[5]}</p>
            </div>

            {/* <img className='separator' src={separator} alt="|" />

            <div className={css.timeLine__item}>
                <span>1999 - 2009</span>
                <h4>Смілянська загальноосвітня школа І-ІІІ ступенів № 7</h4>
            </div> */}
        </div>
    );
}

export default Education;
