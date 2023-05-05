import React from 'react';
import css from '../styles/language.module.sass'
import { languageSwitcher } from "../components/languageSwitcher.js"

const Language = () => {
    return (
        <div className={css.language}>
            <div className={css.language__item}>
                <h4>{languageSwitcher().languages[0][0]}</h4>
                <span>{languageSwitcher().languages[0][1]}</span>
                <p>{languageSwitcher().languages[0][2]}</p>
            </div>
            <div className={css.language__item}>
                <h4>{languageSwitcher().languages[1][0]}</h4>
                <span>{languageSwitcher().languages[1][1]}</span>
                <p>{languageSwitcher().languages[1][2]}</p>
            </div>
        </div>
    );
}

export default Language;
