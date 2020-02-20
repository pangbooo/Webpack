import _ from 'lodash';
import printMe from './print.js';
import './style.css';

function component(){
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = '点击这里，然后查看 console！';
    btn.onclick = printMe;

    element.appendChild(btn);
    return element;
}

let element = component();
document.body.appendChild(element)

if(module.hot){ //表示 模块热替换(Hot Module Replacement) 是否启用，并给进程提供一个接口
    module.hot.accept('./print.js', function(){
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element)
    })
}