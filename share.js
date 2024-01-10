var ShareDaemon = {
    SharingIsCaring: true,
    ShareURLToReddit: function (title, url) {
        open("https://www.reddit.com/submit?title="+encodeURIComponent(title)+"&url="+encodeURIComponent(url));
    },
    ShareMdToReddit: function (title, text) {
        open("https://www.reddit.com/submit?title="+encodeURIComponent(title)+"&text="+encodeURIComponent(text));
    },
    TweetText: function (text) {
        open("https://www.twitter.com/intent/tweet?text="+encodeURIComponent(text))
    },
    TweetURL: function (url, text) {
        open("https://www.twitter.com/intent/tweet?url="+encodeURIComponent(url)+"&text="+encodeURIComponent(text))
    },
    ShareOverEmail: function (subject,body) {
        location.href = ("mailto:?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body))
    },
    ShareOverSMS: function (body) {
        location.href=("sms:?body="+encodeURIComponent(body))
    }
};

if(document.querySelector) {
    document.querySelector('.header-spread').onclick = function () {
        document.querySelector('.share-dialog').style.display = '';
    }
    document.querySelector('.share-dialog-cancel').onclick = function () {
        document.querySelector('.share-dialog').style.display = 'none';
    }
    document.querySelector('#ShareViaEmail').onclick = function () {
        ShareDaemon.ShareOverEmail(document.title, "I found this cool page on themirrazz's website and think you should check it out! "+location.href);
        document.querySelector('.share-dialog').style.display = 'none';
    }
    document.querySelector('#ShareViaSMS').onclick = function () {
        ShareDaemon.ShareOverSMS("I found this cool page on themirrazz's website and think you should check it out! "+location.href);
        document.querySelector('.share-dialog').style.display = 'none';
    }
    document.querySelector('#ShareViaTwitter').onclick = function () {
        ShareDaemon.TweetURL(location.href, "I found this cool page on themirrazz's website and think its pretty neat. You guys should check it out!");
        document.querySelector('.share-dialog').style.display = 'none';
    }
    document.querySelector('#ShareViaReddit').onclick = function () {
        ShareDaemon.ShareURLToReddit(document.title, location.href);
        document.querySelector('.share-dialog').style.display = 'none';
    }
    document.querySelector('#NativeShare').onclick = function () {
        if(navigator.share) {
            navigator.share({ url: location.href, title: document.title }).then(function () {
                document.querySelector('.share-dialog').style.display = 'none';
            })
        } else {
            alert("Your browser doesn't support sharing to native apps.")
        }
    }
}