export function createRootNode(){
    let appNode = document.createElement('div') ;
    appNode.id = 'app' ;
    document.body.appendChild(appNode) ;
    return appNode ;
}