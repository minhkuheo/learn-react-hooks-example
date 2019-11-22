import React, {
  createContext,
  useState,
  // useEffect,
  useMemo,
  useContext
} from 'react';

export const AuthDataContext = createContext(null);

const initialAuthData = {};

const AuthDataProvider = props => {
  const [authData, setAuthData] = useState(initialAuthData);

  // /* The first time the component is rendered, it tries to
  //  * fetch the auth data from a source, like a cookie or
  //  * the localStorage.
  //  */
  // useEffect(() => {
  //   // Default is null
  //   // in real case set currentAuthData = someManager.getAuthData()
  //   // fx. using Firebase
  //   const currentAuthData = null;
  //   if (currentAuthData) {
  //     setAuthData(currentAuthData);
  //   }
  // }, []);

  const authDataValue = useMemo(() => ({
    authData,
    onLogin: newAuthData => setAuthData(newAuthData),
    onLogout: () => setAuthData(initialAuthData),
  }), [authData]);

  return <AuthDataContext.Provider value={authDataValue} {...props} />;
}

export default AuthDataProvider;

export const useAuthDataContext = () => useContext(AuthDataContext);
