import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import './assets/flexible.debug.js'
import './assets/flexible_css.debug.js'
import './assets/phone_reset.css'

ReactDOM.render(<Routes />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
