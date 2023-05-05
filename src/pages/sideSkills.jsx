import React from 'react';
import css from '../styles/skills.module.sass'
import separator from '../assets/img/separator.png'
import { languageSwitcher } from "../components/languageSwitcher.js"

const SideSkills = () => {
    return (
        <div className={css.skills}>
            <h3>{languageSwitcher().sSkillsDescription}</h3>
            <img className='separator' src={separator} alt="—" />
            <h4>{languageSwitcher().sSkillsOS[0]}</h4>
            <ul>
                {languageSwitcher().sSkillsOS[1].map(item => (
                    <li>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
            <div className='invisibleSeparator'></div>
            <h4>{languageSwitcher().sSkillsSoft[0]}</h4>
            <ul>
                {languageSwitcher().sSkillsSoft[1].map(item => (
                    <li>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SideSkills;
