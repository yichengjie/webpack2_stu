import React from 'react' ;
import ReactDOM from 'react-dom';
 
function _createRootNode(){
    let appNode = document.createElement('div') ;
    appNode.id = 'app' ;
    document.body.appendChild(appNode) ;
    return appNode ;
}

export const render = Component => {
  let appNode = _createRootNode() ;
  ReactDOM.render(
    <Component />,
    appNode
  )
}

