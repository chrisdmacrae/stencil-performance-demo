import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as StencilComponents from "stencil-components"

var start = Date.now();

function update() {
    var elapsed = Date.now() - start;
    ReactDOM.render(<App elapsed={elapsed} />, document.getElementById('root'));
    registerServiceWorker();
    requestAnimationFrame(update);
}

requestAnimationFrame(update);
