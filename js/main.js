const bombs = 16;
const first = 1;
var last;
var difficulty = prompt('scegliere livello di difficoltà 0/1/2');
if (difficulty == '0') {
    last = 100;
}
else if (difficulty == '1') {
    last = 80;
}
else if (difficulty == '2') {
    last = 20;
}

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
var bombsArray = nRandMinToMax(bombs,first,last);
console.log(bombsArray);

var userNums = [];
var bool1 = 'vinto';
for (var i = 0; i < last - bombs; i++) {
    userNums[i] = prompt('inserire numero n. ' + (i + 1) + ' ' + 'di ' + (last - bombs));
    if (bombsArray.indexOf(parseInt(userNums[i])) != -1 && parseInt(userNums[i]) == userNums[i] && userNums[i] >= first && userNums[i] <= last) {
        bool1 = 'perso';
        var bool2 = prompt('hai ' + bool1 + ', totalizzando ' + i + ' punti. vuoi ricominciare? si/no');
        break;
    }
    while ((userNums.indexOf(userNums[i]) != -1 && userNums.indexOf(userNums[i]) < i) || parseInt(userNums[i]) != userNums[i] || userNums[i] < first || userNums[i] > last) {
        alert('valore non valido');
        userNums[i] = prompt('inserire numero n. ' + (i + 1) + ' ' + 'di ' + (last - bombs));
        if (bombsArray.indexOf(parseInt(userNums[i])) != -1) {
            bool1 = 'perso';
            var bool2 = prompt('hai ' + bool1 + ', totalizzando ' + i + ' punti. vuoi ricominciare? si/no');
            break;
        }
    }
}

if (bool2 == 'si') {
    location.reload();
}

if (bool1 == 'vinto') {
    alert('hai ' + bool1 + '!');
}

console.log(userNums);
