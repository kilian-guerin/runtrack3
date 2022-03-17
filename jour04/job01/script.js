document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById("button");

    btn.addEventListener("click", function() {
        fetch('expression.txt')
        .then(response => response.text())
        .then(text => document.getElementById('citation').innerHTML = text);
    })
})