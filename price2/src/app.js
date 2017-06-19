import moment from 'moment';
import './styles/index.css' ; 
var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(rightNow);
console.info('hello world ') ;
let appNode = document.createElement('div') ;
appNode.innerHTML = 'hello world auto refresh' ;
document.body.appendChild(appNode) ;
