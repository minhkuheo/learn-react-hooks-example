import { useContext } from 'react';
import authDataProvider, { AuthDataContext } from './authDataProvider';

export {
  authDataProvider
};
export const useAuthDataContext = () => useContext(AuthDataContext);