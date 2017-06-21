import React from 'react';
import ReactDOM from 'react-dom';
import Siderbar from '../components/Siderbar.jsx' ;
import Category4Edit from '../components/category4/Category4Edit.jsx' ;
import '../styles/index.less' ; 
import {createRootNode} from './common.js' ;

let appNode = createRootNode() ;
ReactDOM.render(
    <Siderbar current='rule-category' openKeys ={['rule']}>
       <Category4Edit />
    </Siderbar>,
    appNode
);