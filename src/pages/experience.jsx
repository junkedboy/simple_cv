import React from 'react';
import css from '../styles/timeLine.module.sass'
import separator from '../assets/img/separator.png'
import { languageSwitcher } from "../components/languageSwitcher.js"

const Experience = () => {
    return (
        <div className={css.timeLine}>
            <div className={css.timeLine__item}>
                <span>{languageSwitcher().experience1[0]}</span>
                <h4>{languageSwitcher().experience1[1]}</h4>
                <p className={css.timeLine__location}>({languageSwitcher().experience1[2]})</p>
                <span>{languageSwitcher().experience1[3]}</span>
                <p>{languageSwitcher().experience1[4]}</p>
            </div>

            <img className='separator' src={separator} alt="|" />

            <div className={css.timeLine__item}>
                <span>{languageSwitcher().experience2[0]}</span>
                <h4>{languageSwitcher().experience2[1]}</h4>
                <p className={css.timeLine__location}>({languageSwitcher().experience2[2]})</p>
                <span>{languageSwitcher().experience2[3]}</span>
                <p>{languageSwitcher().experience2[4]}</p>
            </div>

            <img className='separator' src={separator} alt="|" />

            <div className={css.timeLine__item}>
                <span>{languageSwitcher().experience3[0]}</span>
                <h4>{languageSwitcher().experience3[1]}</h4>
                <p className={css.timeLine__location}>({languageSwitcher().experience3[2]})</p>
                <span>{languageSwitcher().experience3[3]}</span>
                <p>{languageSwitcher().experience3[4]}</p>
            </div>
        </div>
    );
}

export default Experience;
