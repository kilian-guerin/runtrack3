function bubblesort(tab, croissant) {
    if(croissant) {
        for(var i = 0; i < tab.length; i++) {
            for(var j = i + 1; j < tab.length; j++) {
                if(tab[i] > tab[j]) {
                    var temp = tab[i];
                    tab[i] = tab[j];
                    tab[j] = temp;
                }
            }
            console.log(tab[i]);
        }
    }
}

var tab = [2,4,6,9,1,30];
bubblesort(tab, false);