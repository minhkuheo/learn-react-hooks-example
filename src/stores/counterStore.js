import { observable, action, computed, decorate } from 'mobx';

export class CounterStore {
    count = 0;

    get doubleCount() {
        return this.count * 2;
    }

    increment() {
        this.count++;
    }
    decrement() {
        this.count--;
    }
}
decorate(CounterStore, {
    count: observable,
    doubleCount: computed,
    increment: action.bound,
    decrement: action.bound,
});