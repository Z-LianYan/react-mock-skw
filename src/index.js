import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { HashRouter as Router } from 'react-router-dom'

//rem
import './modules/rem.js'

//引入post，get方法
import './modules/axios-util'




ReactDOM.render(
	<Router>
		<App />
	</Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();