import React from 'react';
import css from '../styles/skills.module.sass'
import separator from '../assets/img/separator.png'
import { languageSwitcher } from "../components/languageSwitcher.js"

const MainSkills = () => {
    return (
        <div className={css.skills}>
            <h3>
                {languageSwitcher().mSkillsDescription}
            </h3>

            <img className='separator' src={separator} alt="—" />

            <h4>
                {languageSwitcher().mSkillsHeader}
            </h4>

            <ul>
                {languageSwitcher().mSkillsStack.map(item => (
                    <li>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MainSkills;
