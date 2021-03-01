const bombs = 16;
const first = 1;

// function che genera n numeri random compresi tra min e max
function nRandMinToMax(n,min,max) {

    var array = [];

    if (max - min + 1 >= n) {
        for (var i = 0; i < n; i++) {
            array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
            while (array.indexOf(array[i]) != -1 && array.indexOf(array[i]) < i) { /* per assicurarsi che siano tutti diversi */
                array[i] = Math.floor(Math.random() * (max - min + 1)) + min;
            }
        }
    }
    else {
        alert('impossibile generare numeri diversi tra loro');
    }

    return array;

}
console.log(nRandMinToMax(bombs,first,100));

var userNums = [];
for (var i = 0; i < bombs; i++) {
    userNums[i] = prompt('inserire numero n. ' + (i + 1) + ' ' + 'di ' + bombs);
    while ((userNums.indexOf(userNums[i]) != -1 && userNums.indexOf(userNums[i]) < i) || parseInt(userNums[i]) != userNums[i] || userNums[i] < 1 || userNums[i] > 100) {
        alert('valore non valido');
        userNums[i] = prompt('inserire numero n. ' + (i + 1) + ' ' + 'di ' + bombs);
    }
}
console.log(userNums);