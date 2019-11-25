/**
 * Bound actions
 *    The action decorator / function follows the normal rules for binding in javascript. 
 *    However, action.bound can be used to automatically bind actions to the targeted object.
 *    Note that unlike action, (@)action.bound does not take a name parameter, 
 *    so the name will always be based on the property name to which the action is bound.
 */
import { decorate, observable, action, computed } from 'mobx';
import { isThisObjectEmpty } from '../utils/helperfunctions';

export class AuthStore {
  authData = null;

  get isLoggedIn() {
    // Depend on the API
    return !!this.authData && isThisObjectEmpty(this.authData);
  }

  onLogout() {
    this.authData = null;
  }

  onLogin(newAuthData) {
    this.authData = newAuthData;
  }
}
decorate(AuthStore, {
  authData: observable,
  isLoggedIn: computed,
  onLogout: action.bound,
  onLogin: action.bound
});