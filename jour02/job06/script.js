document.addEventListener('DOMContentLoaded', function() {
    var k = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
        n = 0;

    document.addEventListener('keydown', function(e) {
        if(e.keyCode == k[n++]) {
            if (n === k.length) {
                document.querySelector('body').style.backgroundColor = '#336699';
                
                var h1 = document.createElement("h1");
                var h2 = document.createElement("h2");
                h1.innerHTML = "La Plateforme_"
                h2.innerHTML = "Félicitation, tu as découvert le secret !"
                document.body.appendChild(h1);
                document.body.appendChild(h2);

                n = 0;
                return false;
            }
        } else {
            console.log('no');
        }
    });
});