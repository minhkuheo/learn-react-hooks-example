import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import App from './App';
// import AuthDataProvider from './components/context/authDataProvider';
import { Provider } from 'mobx-react';
import AuthStore from './stores/authStore';

const stores = {
  authStore: AuthStore
};

ReactDOM.render(
  <BrowserRouter>
    <Provider {...stores}>
      <App />
    </Provider>
  </BrowserRouter>
  , document.getElementById('root'));
// ReactDOM.render(
//   <BrowserRouter>
//     <AuthDataProvider>
//       <App />
//     </AuthDataProvider>
//   </BrowserRouter>
//   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
