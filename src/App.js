import React from 'react';
import './App.css';
// import AllCommonHookExamples from './containers/different-hooks-example';
import MyHeader from './components/header'
import Router from './components/router';

function App() {
  return (
    <div>
      <header>
        <MyHeader />
      </header>
      <main>
        <Router />
      </main>
    </div>
  );
}

export default App;
