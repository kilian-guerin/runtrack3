function sombrenombrepremier(nbr1, nbr2) {
    for(let i = 2; i < nbr1 || i < nbr2; i++) {
        if(nbr1%i === 0 || nbr2%i === 0) {
            return false;
        }
    }

    return nbr1+nbr2;
}

console.log(sombrenombrepremier(10, 11));