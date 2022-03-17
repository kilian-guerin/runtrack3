document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('scroll', function() {

        var screenScroll = document.documentElement.scrollTop;
        var scrollHeight = document.documentElement.scrollHeight;

        document.getElementById('progress-bar').value = (screenScroll / scrollHeight)  * 333.5;
        document.querySelector('footer').style.background = 'radial-Gradient(rgba(255, 0, 0), rgba(0, 255, 0), rgba(0, 0, 255))';
    })
});