import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import './styles/index.css' ; 
let appNode = document.createElement('div') ;
appNode.innerHTML = 'hello world auto refresh' ;
document.body.appendChild(appNode) ;

ReactDOM.render(
    <App/>,
    appNode
);