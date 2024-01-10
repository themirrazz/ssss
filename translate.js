(function () {
    var links = document.querySelectorAll('.localize-link');
    var uu = new URL(location.href);
    uu.hostname = "jp.themirrazz.repl.co";
    links[1].href = uu.href;
    document.querySelector('.header-translate').onclick = function (event) {
        if(event.stopPropagation) {
            event.stopPropagation();
        }
        var mm = document.querySelector('.localize-menu');
        if(mm.style.display == 'none') {
            mm.style.display = '';
        } else {
            mm.style.display = 'none';
        }
    };
})();