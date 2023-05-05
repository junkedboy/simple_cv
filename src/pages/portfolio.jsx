/* eslint-disable */
import React from 'react';
import css from '../styles/portfolio.module.sass'
import separator from '../assets/img/separator.png'
import { languageSwitcher } from "../components/languageSwitcher.js"

const Portfolio = () => {
    return (
        <div >
            {languageSwitcher().portfolio.map(item => (
                <div className={css.portfolio}>
                    <div className={css.portfolio__item}>
                        <h3>{item[0]}</h3>
                        <img src={item[1]} alt="" />
                        <p>{item[2]}</p>
                        <ul>
                            {item[3].map(subItem => (
                                <li>
                                    <span>{subItem}</span>
                                </li>
                            ))}
                        </ul>
                        <div className={css.links}>
                            {item[4] != 'false' && <a href={item[4]}><i className="fa-brands fa-github"></i> GitHub</a>}
                            <a className={css.links__limited} href={item[5]}><i className="fa-solid fa-link"></i> {item[5]}</a>
                        </div>
                    </div>
                    <img className='separator' src={separator} alt="—" />
                </div>
                
            ))}

        </div>
    );
}

export default Portfolio;
