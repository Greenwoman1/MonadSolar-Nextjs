"use client";
import React, { useState } from "react";

import ba from '../local/ba'
import en from '../local/en'

const translations = {
  ba,
  en,
};

export default function WithTranslation(WrappedComponent, page) {
  return function (props) {
    const [language, setLanguage] = useState("en");
    const changeLanguage = (lang) => {
      setLanguage(lang);
    };
console.log(language)
    const translate = (key) =>  translations[language][key] || key
    return (
      <WrappedComponent
        {...props}
        t={translate}
        language={language}
        changeLanguage={changeLanguage}
      />
    );
  };
}