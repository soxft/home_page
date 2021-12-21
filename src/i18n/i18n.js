import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import zh_CN from './lang/zh_CN';
import en from './lang/en';

const resources = {
    'zh-CN': zh_CN,
    'en': en,
};

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'zh-CN',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;