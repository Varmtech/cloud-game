import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux'

import './index.css';
import './css/main.css';
import './css/ui.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import Example from "./components/Stream/example";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
