/**
 *  https://mobx-react.js.org/recipes-context
 * 
 */
import React from 'react';
import { storesContext } from '../contexts';

export const useStores = () => React.useContext(storesContext);