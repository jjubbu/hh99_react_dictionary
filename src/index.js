import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';

import {Provider} from "react-redux";
import store from "./redux/store";
import {GlobalStyle} from "./style/global"

import "./style/font.css"

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <GlobalStyle/>
        <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById(
        'root'
    )
);

reportWebVitals();
