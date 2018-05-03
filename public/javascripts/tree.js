var container = document.querySelector('.tree');

function aa(ele) {
    var className = ele.className;
    var flag = /show/.test(className);
    if (flag) {
        ele.className = ele.className.replace(/show/, '')
    } else {
        ele.className += ' show'
    }
}

container.addEventListener('click', function (e) {
    tar = e.target
    id = tar.getAttribute('id');

    if (id !== 'yearButton' && id !== 'monthButton') {
        console.log('return')
        return
    }
    var ul = tar.parentNode.childNodes[1]
    if (id === 'yearButton') {
        /*        aa(ul)
                console.log(ul)*/
        $(ul).slideToggle(200)
    }
    if (id === 'monthButton') {
        /* aa(ul)

         console.log(ul)*/
        $(ul).slideToggle(200)

    }

})
