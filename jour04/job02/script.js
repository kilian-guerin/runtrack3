document.addEventListener('DOMContentLoaded', function() {
    var table = {'nom': 'La Plateforme_', 'address': '8 rue d\'hozier', 'city': 'Marseille', 'nb_staff': '11', 'creation': '2019'}

    function jsonValueKey(tableau = {}, key) {
        return console.log(tableau[key])
    }

    jsonValueKey(table, 'city')
})