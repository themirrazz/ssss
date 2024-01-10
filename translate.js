(function () {
    var links = document.querySelectorAll('.localize-link');
    var languages = [
        'en',
        'es',
        'fr',
        'de',
        'zh',
        'ja',
        'ar',
        'tlh'
    ];
    links.forEach((link,index3) => {
        var uu = new URL(location.href);
        var d = document.querySelector('html').getAttribute('lang');
        uu.pathname = uu.pathname.replace(
            '/'+d+'/',
            '/'+languages[index3]+'/'
        );
        if(d!=languages[index3]) {
            link.href=uu.href;
            link.className = 'localize-link';
        } else {
            link.className = 'localize-link localize-current';
        }
    });
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
