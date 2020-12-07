import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import {getToken} from "./utils/localStorageToken";
import jwt from "jsonwebtoken";
import store from "./containers/App/store";
import {Provider} from "react-redux";

var token = getToken()
if (token) {
    console.log("token:", token)
    const data = jwt.decode(token);
    console.log(data)
    const now = new Date().getTime() / 1000  //convert to timestamp in seconds
    console.log(now)
    if (data.exp > now) {
        store.dispatch({
            type: "LOGIN_SUCCESS",
            payload: {token, username: data.username}
        })
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
