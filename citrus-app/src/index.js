import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from './Components/firebase';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter} from 'react-router-dom';

ReactDOM.render(
	<HashRouter>
		<App />
	</HashRouter>
	, document.getElementById('root'));
registerServiceWorker();

export {
  firebase
};
