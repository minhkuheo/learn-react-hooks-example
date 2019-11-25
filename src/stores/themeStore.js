import { observable, action, decorate } from 'mobx';

export class ThemeStore {
    theme = 'light';

    setTheme(newTheme) {
        this.theme = newTheme;
    }
}
decorate(ThemeStore, {
    theme: observable,
    setTheme: action
})