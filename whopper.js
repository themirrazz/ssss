if(document.querySelector) {
    document.querySelector('.header-options').onclick = function (event) {
        if(event.stopPropagation) {
            event.stopPropagation();
        }
        if(document.querySelector('.hamburger-menu').style.display=='none') {
            document.querySelector('.hamburger-menu').style.display = '';
        } else {
            document.querySelector('.hamburger-menu').style.display = 'none';
        }
    };
    window.addEventListener('click', function (event) {
        document.querySelector('.hamburger-menu').style.display = 'none';
        document.querySelector('.localize-menu').style.display = 'none';
    });
}