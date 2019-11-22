import React from "react";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
// import { useAuthDataContext } from "./context/authDataProvider";
// import { isThisObjectEmpty } from "../utils/helperfunctions";
import * as PATHS from "../assets/constants/pathnames";

// Using Mobx Store
const MyHeader = observer(() => {
  const onLogout = false;
  return true ? <NonAuthHeader /> : <AuthHeader logout={onLogout} />;
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

const NonAuthHeader = () => {
  return (
    <ul>
      <li>
        <Link to={PATHS.HOME}>Home</Link>
      </li>
      <li>
        <Link to={PATHS.USE_EFFECT}>useEffect</Link>
      </li>
      <li>
        <Link to={PATHS.USE_REF}>useRef</Link>
      </li>
    </ul>
  );
};

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
