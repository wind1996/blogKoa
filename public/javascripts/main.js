document.querySelector('#menu-bind-js').addEventListener('click', function () {
    var ele = document.querySelector('#menu-list-bind-js');
    var ele_btn = document.querySelector('#menu-bind-js');
    var cName = ele.className;
    if (/active/.test(cName)) {
        ele.className = ele.className.replace(/\sactive/, '');
        ele_btn.className = ele_btn.className.replace(/\sactive/, '')
    } else {
        ele.className += ' active';
        ele_btn.className += ' active'
    }
});
