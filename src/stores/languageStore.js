import { observable, action, computed, decorate } from 'mobx';
import enUS from '../languages/i18n/en';
import viVIE from '../languages/i18n/vi';
// import { CURRENT_LANGUAGE } from '../assets/constants/localstorageVariableNames';

export class LanguageStore {
    lang = 'en';

    get getCurrentLanguage() {
        return this.lang;
    }
    get resources() {
        switch(this.lang) {
            case 'en':
                return enUS;
            case 'vi':
                return viVIE;
            default:
                return enUS;
        }
    }

    changeLanguageTo(newLanguage) {
        this.lang = newLanguage;
        // localStorage.setItem(CURRENT_LANGUAGE, newLanguage);
    }
    // getTextBasedOnLanguage(labelStringInput) {
    //     return this.resources(labelStringInput);
    // }
}
decorate(LanguageStore, {
    lang: observable,
    getCurrentLanguage: computed,
    resources: computed,
    changeLanguageTo: action,
    // getTextBasedOnLanguage: action,
});