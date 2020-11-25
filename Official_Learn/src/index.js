import printMe from './print.js';
import './style.css';

function getComponent(){
    return import(/* webpackChunkName: "loadsh" */ 'lodash').then(({default: _}) => {
        var element = document.createElement('div');
        element.innerHTML = _.join(['Hello', 'webpack'], ' ');
        return element;

    }).catch(error => 'An error occured while loading the component')
}

getComponent().then(component => {
    document.body.appendChild(component);
})

if(module.hot){ //表示 模块热替换(Hot Module Replacement) 是否启用，并给进程提供一个接口
    module.hot.accept('./print.js', function(){
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component();
        document.body.appendChild(element)
    })
}