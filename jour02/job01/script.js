document.addEventListener('DOMContentLoaded', function() {
    function citation() {
        const cita = document.getElementById('citation').innerHTML;
        console.log(cita);
    }

    const el = document.getElementById("button");

    el.addEventListener("click", citation)
})
