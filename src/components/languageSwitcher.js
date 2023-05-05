/* eslint-disable */
import { useSelector } from 'react-redux';
import { eng , ukr } from "./localization.js"

export function languageSwitcher () {
    const language = useSelector(state => state.language.value)
    if (language === "eng") {
        return eng
    }
    if (language === "ukr") {
        return ukr
    }
}