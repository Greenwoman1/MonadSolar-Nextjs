'use client'
import React, { useState } from 'react'
import WithTranslation from '../_HOC/WithTranslation'
const SelectLanguage = ({t,language, changeLanguage}) => {


  return (
    <div>
    <p>{     t('Please Login') }</p>
    <p>Current language: {language}</p>
    <button onClick={() => changeLanguage('en')}>English</button>
    <button onClick={() => changeLanguage('ba')}>Bosanski</button>

  </div>
  )
}

export default WithTranslation(SelectLanguage, '')