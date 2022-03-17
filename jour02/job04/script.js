document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('keydown', writeText)

    const area = document.getElementById('keylogger')

    function writeText(letter) {
        area.textContent += String.fromCharCode(letter.which);
        if(area.hasFocus()) {
            area.textContent += String.fromCharCode(letter.which);
        }
    }
});