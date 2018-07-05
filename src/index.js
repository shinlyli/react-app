import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './view/app/route-map.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
