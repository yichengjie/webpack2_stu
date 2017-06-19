import React from 'react';
import ReactDOM from 'react-dom';
import Siderbar from '../components/Siderbar.jsx' ;
import Category4Query from '../components/category4/Category4Query.jsx' ;


import '../styles/index.less' ; 
let appNode = document.createElement('div') ;
appNode.id = 'app' ;
document.body.appendChild(appNode) ;

ReactDOM.render(
    <Siderbar current='rule-category' openKeys ={['rule']}>
       <Category4Query />
    </Siderbar>,
    appNode
);