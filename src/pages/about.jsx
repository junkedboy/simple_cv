import React, {useState} from 'react';
import css from '../styles/about.module.sass'
import separator from '../assets/img/separator.png'
import { languageSwitcher } from "../components/languageSwitcher.js"

const About = () => {
    const [ ageToggle, setAgeToggle ] = useState(true)

    return (
        <div className={css.main}>
            <div className={css.shortInfo}>
                <div style={{cursor: 'pointer'}} onClick={() => setAgeToggle(current => !current)} className={[css.shortInfo__item, css.special].join(' ')}>
                {ageToggle === true 
                    ? <div><span><i className="fa-brands fa-square-pied-piper"></i> {languageSwitcher().dob[0]}:</span> <a>{languageSwitcher().dob[1]}</a></div>
                    : <div><span><i className="fa-brands fa-square-pied-piper"></i> {languageSwitcher().age[0]}:</span> <a>{languageSwitcher().age[1]}</a></div>
                    }
                </div>
                <div className={css.shortInfo__item}>
                    <span><i className="fa-solid fa-tree-city"></i> {languageSwitcher().city[0]}:</span><a href={languageSwitcher().cityLink}>{languageSwitcher().city[1]}</a>
                </div>
                <div className={css.shortInfo__item}>
                    <span><i className="fa-solid fa-phone"></i> {languageSwitcher().telephone[0]}:</span><a href={'tel:'+languageSwitcher().telephone}>{languageSwitcher().telephone[1]}</a>
                </div>
                <div className={css.shortInfo__item}>
                    <span><i className="fa-regular fa-envelope"></i> {languageSwitcher().email[0]}:</span><a href={'mailto:'+languageSwitcher().email}>{languageSwitcher().email[1]}</a>
                </div>
            </div>

            {/* <img className='separator' src={separator} alt="" />
            <p className={css.textBox}>
                З особистих якостей хотілося б відзначити відповідальність та цілеспрямованість, бажання вчитися та розвиватися.
            </p> */}

            <img className='separator' src={separator} alt="" />
                    
            <p className={css.textBox}>
                <span>{languageSwitcher().hobby[0]}</span>
                {languageSwitcher().hobby[1]}
            </p>
        </div>
    );
}

export default About;
