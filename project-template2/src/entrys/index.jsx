import React from 'react';
import ReactDOM from 'react-dom';
import HelloComp from '../components/HelloComp.jsx' ;

import '../styles/index.less' ; 
let appNode = document.createElement('div') ;
appNode.id = 'app' ;
document.body.appendChild(appNode) ;

ReactDOM.render(
    <HelloComp />,
    appNode
);