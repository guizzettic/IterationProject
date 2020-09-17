import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.js';
import store from './store.js';
import './styles.scss';
render(
// wrap the App in the Provider and pass in the store
React.createElement(BrowserRouter, null,
    React.createElement(Provider, { store: store },
        React.createElement(App, null))), document.getElementById('contents'));
//# sourceMappingURL=index.js.map