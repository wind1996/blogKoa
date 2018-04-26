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

var a = null;

function f2() {
    if (a) return
    var ht = document.querySelector('html')
    var cName = ht.className;
    var flag = /hidden-scroll/.test(cName)
    if (flag) {
        ht.className = ht.className.replace(/hidden-scroll/, '');
        console.log('add name')
    }
    a = setTimeout(() => {
        ht.className += ' hidden-scroll';
        console.log('clear name')
        a = null;
    }, 1500)
}

var flag, num1
window.onscroll = function () {
    f2();
    if (!(document.body.scrollTop || document.documentElement.scrollTop)) {
        console.log('在顶了')
        f(1, '#footer-bind')

    }
    if (flag) {
        return;
    }
    num1 = document.body.scrollTop || document.documentElement.scrollTop;
    flag = setTimeout(function () {
        var cha = document.body.scrollTop || document.documentElement.scrollTop - num1
        if (cha > 50) {
            // console.log('向下滚动')
            f(0, '#header-bind')
            f(1, '#footer-bind')
        }
        if (cha < -50) {
            // console.log('向上滚动')
            f(1, '#header-bind')
            f(0, '#footer-bind')
        }
        flag = null;
    }, 100)
};

function f(num, ele) {
    var ele = document.querySelector(ele)
    var cName = ele.className;
    var flag = /\sshow/.test(cName)
    if (num) {
        // console.log('添加')
        if (!flag) {
            ele.className += ' show';
        }
    } else {
        // console.log('删除')
        if (flag) {
            ele.className = ele.className.replace(/\sshow/, '');
        }
    }
}


window.onresize = function () {
    var ele = document.querySelector('#header-bind');
    if (!/show/.test(ele.className)) {
        ele.className += ' show'
    }
}
