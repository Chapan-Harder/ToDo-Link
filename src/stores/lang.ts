import { writable } from 'svelte/store';
import { setLocale } from "@i18n/i18n-svelte"
import { loadAllLocales } from '@/i18n/i18n-util.sync';
import { i18n } from '@/i18n/i18n-util';

const langTypeList = ['fa', 'en'] as const;
export type Language = (typeof langTypeList)[number];
export const isLanguage = (x: any): x is Language => langTypeList.includes(x);

const langInit =
    typeof localStorage !== 'undefined' && isLanguage(localStorage.getItem('language'))
        ? (localStorage.getItem('language') as Language)
        : 'fa';
const language = writable<Language>(langInit);

loadAllLocales();

i18n();

setLocale(langInit);

if (typeof document !== 'undefined')
    if (typeof document !== 'undefined') {
        switch (langInit) {
            case 'en':
                document.dir = 'ltr';
                break;
            case 'fa':
                document.dir = 'rtl';
                break;
        }
    }

export const setLanguage = (value: Language) => {
    switch (value) {
        case 'en':
            document.dir = 'ltr';
            break;
        case 'fa':
            document.dir = 'rtl';
            break;
    }
    localStorage.setItem('language', value);
    setLocale(value);
    language.set(value);
};

export default language;
