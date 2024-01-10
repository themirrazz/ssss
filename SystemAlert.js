var SystemAlert = {
    queue: [],
    now: null,
    show: function (details) {
        if(!SystemAlert.now) {
            SystemAlert.now = details;
            var dkn = document.getElementById('SystemAlertDarkness');
            var dc = document.getElementById('SystemAlertContainer');
            var dlg = document.getElementById('SystemAlertDialog');
            var ttl = document.getElementById('SystemAlertTitle');
            var bdy = document.getElementById('SystemAlertBody');
            var btn = document.getElementById('SystemAlertButton');
            var ckr = document.getElementById('SystemAlertClickr');
            if(details.clicker) {
                if(details.clicker.text && details.clicker.on) {
                    ckr.className = 'SystemAlert-Clickr';
                    ckr.innerText = details.clicker.text;
                    ckr.onclick = function () {
                        details.clicker.on();
                    }
                } else {
                    ckr.className = 'SystemAlert-Hidden'
                }
            } else {
                ckr.className = 'SystemAlert-Hidden'
            }
            dkn.className = 'SystemAlert-Showing';
            dlg.className = 'SystemAlert-Appear';
            if(details.type === 'error') {
                dc.className = 'SystemAlert-Error';
            } else if(details.type === 'warning') {
                dc.className = 'SystemAlert-Warning';
            } else {
                dc.className = 'SystemAlert-Showing';
            }
            ttl.innerText = details.title;
            bdy.innerText = details.body;
            btn.innerText = details.buttonText || 'Acknowledge';
            btn.onclick = function () {
                dkn.className = 'SystemAlert-Hidden';
                dlg.className = 'SystemAlert-Disappear';
                setTimeout(function () {
                    dc.className = 'SystemAlert-Hidden';
                    var now = SystemAlert.now;
                    if(!now) { return }
                    if(now.okAction) {
                        try {
                            now.okAction()
                        } catch (error) {
                            null;
                        }
                    }
                    SystemAlert.now = null;
                    var qu = SystemAlert.queue.shift();
                    if(!qu) {
                        return;
                    }
                    SystemAlert.show(qu);
                }, 490);
            }
        } else {
            SystemAlert.queue.push(details);
        }
    }
}