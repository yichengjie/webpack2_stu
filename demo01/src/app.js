import moment from 'moment';
//import React from 'react';
//import ReactDOM from 'react-dom'; 
//import {Button} from 'antd' ; 
 
var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(rightNow);
console.info('hello world') ;
let appNode = document.createElement('div') ;
appNode.innerHTML = 'hello world' ;
document.body.appendChild(appNode) ;
