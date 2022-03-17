document.addEventListener('DOMContentLoaded', function() {


    const btn = document.getElementById("button");
    
    btn.addEventListener("click", function() {
        fetch('pokemon.json')
        .then(response => response.text())
        .then(function(text) {
            var data = JSON.parse(text);

            for (let i = 0; i < data.length; i++) {
                if(data[i].id == document.getElementById("pokemon-id").value && data[i].name.english == document.getElementById("pokemon-name").value && data[i].type == document.getElementById("pokemon-select")) {
                    console.log(data[i].name.english);
                    console.log('yes');
                // } else if (data[i].id == document.getElementById("pokemon-id").value) {
                //     console.log(data[i].name.english);
                // } else if (data[i].name.english == document.getElementById("pokemon-name").value) {
                //     console.log(data[i].name.english);
                } else if (data[i].type == document.getElementById("pokemon-select").value) {
                    console.log(data[i].name.french);
                    console.log(data[i].id);
                }   
            }
        });
    });
})