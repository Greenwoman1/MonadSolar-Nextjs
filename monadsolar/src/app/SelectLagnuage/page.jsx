'use client'
import React, { useState } from 'react'
import WithTranslation from '../_HOC/WithTranslation'
const LanguageSelector = ({ translate, currentLanguage, switchLanguage }) => (
  <div>
    <p>{translate('pleaseLogin')}</p>
    <p>Current language: {currentLanguage}</p>
    <button onClick={() => switchLanguage('en')}>English</button>
    <button onClick={() => switchLanguage('ba')}>Bosanski</button>
  </div>
);

export default WithTranslation(SelectLanguage, '')
