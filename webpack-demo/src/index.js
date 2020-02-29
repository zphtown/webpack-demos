import _ from 'lodash';
import './css/test.css';
import './css/reset.css';
import './css/index.scss';
import src from './imgs/demo.png';
import './fonts/iconfont.css';
function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack', 'zph'], ' ') + '<i class="iconfont icon-richscan_icon"></i>';
    element.className = 'hello';
    return element;
  }
  
  document.body.appendChild(component());