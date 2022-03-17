function bisextile(year) {
    if(year % 400 == 0 || year % 4 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(bisextile(2024));