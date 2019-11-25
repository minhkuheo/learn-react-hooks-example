import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { useStores } from '../hooks/useStores';
// import { useAuthDataContext } from "./context/authDataProvider";
// import { isThisObjectEmpty } from "../utils/helperfunctions";
import * as PATHS from "../assets/constants/pathnames";
import TranslateLanguage from './language';



// Using Mobx Store
const MyHeader = observer(() => {
  const { authStore } = useStores();
  return authStore.isLoggedIn 
    ? <AuthHeader logout={authStore.onLogout()} /> 
    : <NonAuthHeader />;
});

// // Using useContext
// const MyHeader = () => {
//   const { authData, onLogout } = useAuthDataContext();
//   return isThisObjectEmpty(authData) ? (
//     <NonAuthHeader />
//   ) : (
//     <AuthHeader logout={onLogout} />
//   );
// };

export default MyHeader;

const NonAuthHeader = observer(() => {
  const { languageStore, counterStore } = useStores();
  return (
    <ul>
      <li>
        <Link to={PATHS.HOME}>
          <TranslateLanguage label="MENU.HOME" />
        </Link>
      </li>
      <li>
        <Link to={PATHS.USE_EFFECT}>useEffect</Link>
      </li>
      <li>
        <Link to={PATHS.USE_REF}>useRef</Link>
      </li>
      <li>
        <Link to={PATHS.USE_REDUCER}>useReducer</Link>
      </li>
      <li>
        <button 
          type="button" 
          onClick={() => languageStore.changeLanguageTo('en')} 
          style={{ color: languageStore.lang === 'en' ? 'red' : 'black' }}
        >
          <TranslateLanguage label="LABEL_CHANGE_ENGLISH" />
        </button>
        <button 
          type="button" 
          onClick={() => languageStore.changeLanguageTo('vi')} 
          style={{ color: languageStore.lang === 'vi' ? 'red' : 'black' }}
        >
          <TranslateLanguage label="LABEL_CHANGE_VIETNAMESE" />
        </button>
      </li>
      <li>
        <p>count from counterStore: <strong style={{ color: 'red', fontSize: '24px' }}>{counterStore.count}</strong></p>
      </li>
    </ul>
  );
});

const AuthHeader = ({ onLogout }) => {
  return (
    <ul>
      <li>
        <Link to={PATHS.HOME}>AuthMenu 1</Link>
      </li>
      <li>
        <Link to={PATHS.USE_EFFECT}>AuthMenu 2</Link>
      </li>
      <li>
        <Link to={PATHS.USE_REF}>Settings</Link>
      </li>
      <li>
        <Link to={PATHS.USE_REF}>Logout</Link>
      </li>
    </ul>
  );
};
