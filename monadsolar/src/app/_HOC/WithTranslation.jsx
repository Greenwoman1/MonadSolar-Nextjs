import Cookies from 'js-cookie'
import React, { useState } from "react";

import ba from '../local/ba'
import en from '../local/en'

const translations = {
  ba,
  en,
};

export const withTranslation = (Component) => {
  return function WrappedComponent(props) {
    const [lang, setLang] = useState('en');
    
    const changeLang = (newLang) => setLang(newLang);
    
    const t = (key) => translations[lang][key] || key;

    return <Component {...props} translate={t} currentLanguage={lang} 
    switchLanguage={changeLang} />;
  };
};
