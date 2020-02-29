import _ from 'lodash';
import printMe from './print.js';
import './fonts/iconfont.css';

function component() {

    var btn = document.createElement('button');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;
  
    var element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack', 'zph123'], ' ') + '<i class="iconfont icon-richscan_icon"></i>';
    element.appendChild(btn);
    return element;
  }
  
  document.body.appendChild(component());

if(module.hot){
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}