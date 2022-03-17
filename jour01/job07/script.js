'use strict';

function jourtravaille(day, month, year) {
    let dayoff = ['01/01/2020', '13/04/2020', '01/05/2020', '08/05/2020', '01/01/2020', '21/05/2020', '01/06/2020', '14/07/2020', '15/08/2020', '01/11/2020', '25/12/2020'];

    let date = new Date(year, month - 1, day);

    for(let i = 0; i < dayoff.length; i++) {
        if(date.toLocaleDateString() == dayoff[i]) {
            return console.log('Le ' + day + ' ' + month + ' ' + year + ' est un jour férié.');
        }
    }

    if(date.getDay() == 6 || date.getDay() == 0) {
        return console.log('Le ' + day + ' ' + month + ' ' + year + ' est un week-end.');
    } else {
        return console.log('Le ' + day + ' ' + month + ' ' + year + ' est un jour de travaille.');
    }
}

jourtravaille('13', '04', '2020')