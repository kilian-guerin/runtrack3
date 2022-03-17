document.addEventListener('DOMContentLoaded', function() {
    const el = document.getElementById("button");
    el.addEventListener("click", showHide)

    function showHide() {
        if(document.getElementById('citation').innerText === '') {
            document.getElementById('citation').innerHTML = 'L\'important n\'est pas la chute, mais l\'atterissage.';
            el.innerHTML="Cacher";
        } else {
            document.getElementById('citation').innerHTML = '';
            el.innerHTML="Afficher";
        }
    }
});