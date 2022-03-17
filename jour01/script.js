'use strict';

document.addEventListener('DOMContentLoaded', function() {
    // Possible de changer la valeur de variable au fur à mesure du code et Possible d'utiliser la variable au fur à mesure du code.
    var myVariable = 'Ceci est une variable';
    // Possible de changer la valeur de variable au fur à mesure du code et Possible d'utiliser la variable au fur à mesure du code.
    let MaVariable2 = 'Ceci est une variable';
    // Impossible de changer la valeur de la constante au fur à mesure du code.
    const myConst = 'Ceci est une constant';

    // SCOPE: variable

    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////


    // Table: variable
    var myArray = [];

    // Table object: variable
    let myObj = {
        key: 'value',
        test: 5
    };

    for(let i = 1; i < myArray.length; i++) {
        console.log(myArray[i]);
    }

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////

    function myFunction (object) {
        console.log(object);
    }

    myFunction(myObj);

    function myFunction ({key, test}) {
        console.log(key);
        console.log(test);
    }
});