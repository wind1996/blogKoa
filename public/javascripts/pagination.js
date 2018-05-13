;(function () {
    var data = JSON.parse($('#paginationBasic').text());
    console.log(data);
    var currentPage = data.currentPage;
    var baseUrl = data.baseUrl;
    var sumPage = data.sumPage;
    var size = data.size;
    var result = [];
    if (sumPage <= size) {
        for (var i = 1; i <= sumPage; i++) {
            result.push({text: i, isCurrent: i === currentPage, href: baseUrl + i})
        }
    } else if (currentPage - 1 < size - 2-1) {
        for (var i = 1; i <= size - 2; i++) {
            result.push({text: i, isCurrent: i === currentPage, href: baseUrl + i})
        }
        result.push({text: '...', isCurrent: false})
        result.push({text: sumPage, isCurrent: false, href: baseUrl + sumPage})
    } else if (sumPage - currentPage < size - 2-1) {
        for (var i = sumPage; i > sumPage - size + 2; i--) {
            result.unshift({text: i, isCurrent: i === currentPage, href: baseUrl + i})
        }
        result.unshift({text: '...', isCurrent: false})
        result.unshift({text: 1, isCurrent: false, href: baseUrl + 1})
    } else {
        var start = Math.ceil(currentPage - (size - 4) / 2), end = start + size - 4
        for (var i = start; i < end; i++) {
            result.push({text: i, isCurrent: i === currentPage, href: baseUrl + i})
        }
        result.unshift({text: '...', isCurrent: false})
        result.unshift({text: 1, isCurrent: false, href: baseUrl + 1})
        result.push({text: '...', isCurrent: false})
        result.push({text: sumPage, isCurrent: false, href: baseUrl + sumPage})
    }
    if (currentPage !== 1)
        result.unshift({text: '<', isCurrent: false, href: baseUrl + (currentPage - 1)})
    if (currentPage !== sumPage)
        result.push({text: '>', isCurrent: false, href: baseUrl + (currentPage + 1)})
    console.log(result)
    var ul = document.createDocumentFragment()
    result.forEach(function (value) {
        var li = document.createElement("li");
        if (value.isCurrent) {
            li.className = 'active'
        }

        var a = document.createElement('a')
        if (value.href) {
            a.setAttribute('href', value.href)
        }
        a.innerText = value.text
        li.appendChild(a)
        ul.appendChild(li)
    })
    console.log(ul)
    $('#paginationContainer').html(ul)
    $('#paginationBasic')[0].parentNode.removeChild($('#paginationBasic')[0]);
})();