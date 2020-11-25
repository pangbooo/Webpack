import _ from 'lodash';
import './style.css';

function component(){
    var element = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    button.onclick = e => import(/* webpackChunkName: "print" */ './print.js').then(module => {
        var print = module.default;
        print();
    });

    return element;
    
}
document.body.appendChild(component());

if(module.hot){ //表示 模块热替换(Hot Module Replacement) 是否启用，并给进程提供一个接口
    module.hot.accept('./print.js', function(){
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element)
    })
}