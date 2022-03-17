document.addEventListener('DOMContentLoaded', function() {
    const el = document.getElementById("button");
    el.addEventListener("click", addone)

    function addone() {
        document.getElementById("compteur").innerHTML++;
    }
});