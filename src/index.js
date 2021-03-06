import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app';

console.log("v1.0.0");

// Firebase config. This API Key is completely okay to be exposed
const config = {
    apiKey: "AIzaSyDqNearNomkDkz8cgGN5jkvnKUcxabHQ1g",
    authDomain: "frc2090scouting.firebaseapp.com",
    databaseURL: "https://frc2090scouting.firebaseio.com",
    projectId: "frc2090scouting",
    storageBucket: "frc2090scouting.appspot.com",
    messagingSenderId: "536911532006"
};
firebase.initializeApp(config);

// React render to the root element
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
