// メリクリスマスfrom themirrazzサミラズ！

(function kurisumasuDesuKa () {
    var date = new Date();
    if(date.getMonth() === 11) {
        // クリスマスです、BABYYYYYYYYYYYYYYYYYYYYYY！
        var snow = document.querySelector('.snowflake-container');
        snow.style.display = '';
        if(!snow) { return; }
        setInterval(function () {
            var fureikku = document.createElement('img');
            fureikku.src = './sunofureikku.svg';
            fureikku.className = 'sunofureikku';
            var top = 0;
            var left = Math.floor(Math.random()*1000) * 0.1;
            var lO = false;
            var oooo = setInterval(function () {
                if(lO) {
                    left -= 0.1;
                } else {
                    left += 0.1;
                }
                fureikku.style.left = left+'%';
            },100);
            var eeee = setInterval(function () {
                lO = !lO;
            },1000);
            var iiii = setInterval(function () {
                    fureikku.style.top = top + '%';
                top += 0.1;
                if(top > 99.89) {
                    clearInterval(oooo);
                    clearInterval(iiii);
                    clearInterval(eeee);
                    snow.removeChild(fureikku);
                }
            },10);
            setTimeout(function () {
                snow.appendChild(fureikku);
            },10);
        },1400);
    }
})();