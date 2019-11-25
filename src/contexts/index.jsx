/**
 *  https://mobx-react.js.org/recipes-context
 * 
 */
import React from 'react';
import { AuthStore } from '../stores/authStore';
import { CounterStore } from '../stores/counterStore';
import { ThemeStore } from '../stores/themeStore';
import { LanguageStore } from '../stores/languageStore';

export const storesContext = React.createContext({
    authStore: new AuthStore(),
    counterStore: new CounterStore(),
    themeStore: new ThemeStore(),
    languageStore: new LanguageStore(),
});