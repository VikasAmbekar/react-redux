//  Provide is a helper function from the react-redux package which allows us to use the store inside whole react code
import React from 'react';
import ReactDOM from 'react-dom/client';
import store from "./redux/store";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // Provider from the react-redux package
    // store contains the reducers
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);
