import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = "http://jsonplaceholder.typicode.com";
//We could put out authorization token here, if we had one.
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
//We could also specify the content type if we needed to.
axios.defaults.headers.common["Content-Type"] = 'application.json';


axios.interceptors.request.use(request => {
    console.log(request);
    return request;
}, error => {
    //Edit request config
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(request => {
    console.log(request);
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
