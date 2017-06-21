import React from 'react';
import ReactDOM from 'react-dom';
import Siderbar from '../components/Siderbar.jsx' ;
import Category4Query from '../components/category4/Category4Query.jsx' ;
import {createRootNode} from './common.js' ;
import '../styles/index.less' ; 

let appNode = createRootNode() ;
ReactDOM.render(
    <Siderbar current='rule-category' openKeys ={['rule']}>
       <Category4Query />
    </Siderbar>,
    appNode
);