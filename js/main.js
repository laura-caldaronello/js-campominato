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
    else if (max - min + 1 < n) {
        alert('impossibile generare numeri diversi tra loro');
    }

    return array;

}
// /function

// function isInArray
function isInArray(value,array) {
    var bool = false;
    var i = 0;
    while (i < array.length && bool == false) {
        if (array[i] == value) {
            bool = true;
        }
        i++;
    }
    return bool;
}
// /function

// esercizio

const bombs = 16;
const first = 1;
var last;

var difficulty = prompt('scegliere livello di difficoltà 0/1/2');
while (difficulty != '0' && difficulty != '1' && difficulty != '2') {
    difficulty = prompt('valore non valido. scegliere livello di difficoltà 0/1/2');
}

switch (difficulty) {
    case '0':
        last = 100;
        break;
    case '1':
        last = 80;
        break;
    case '2':
        last = 50;
        break;
    default:
        break;
}

var bombsArray = nRandMinToMax(bombs,first,last);
console.log(bombsArray); /* mi serve per testare */

// versione grafica

// creazione suggerimenti
var bombsAround = [];
var i = first;
while (i <= last) {
    if (!isInArray(i,bombsArray)) {
        var j = 0;
        if (isInArray(i - 11,bombsArray) && i > 10 && (i - 1) % 10 != 0) {
            j++;
        }
        if (isInArray(i - 10,bombsArray) && i > 10) {
            j++;
        }
        if (isInArray(i - 9,bombsArray) && i > 10 && i % 10 != 0) {
            j++;
        }
        if (isInArray(i - 1,bombsArray) && i != 1 && (i - 1) % 10 != 0) {
            j++;
        }
        if (isInArray(i + 1,bombsArray) && i % 10 != 0) {
            j++;
        }
        if (isInArray(i + 9,bombsArray) && i != 1 && (i - 1) % 10 != 0 && i <= last - 10) {
            j++;
        }
        if (isInArray(i + 10,bombsArray) && i <= last - 10) {
            j++;
        }
        if (isInArray(i + 11,bombsArray) && i <= last - 10 && i % 10 != 0) {
            j++;
        }
        bombsAround.push(j);
    }
    else {
        bombsAround.push('bomba!');
    }
    i++;
}
console.log(bombsAround);

// scrivo il livello
document.getElementById('titolo').innerHTML += difficulty;

// generazione di tutte le caselle cliccabili
for (var i = 0; i < last; i++) {
    document.getElementById('table').innerHTML += '<div class="squares"></div>';
}

// generazione interazioni
var elements = document.getElementsByClassName('squares');
var j = 0; /* per contare i click */
// scrivo il punteggio inziale
document.getElementById('punti').innerHTML = j;

for (let i = 0; i < last; i++) { /* approfondire perchè con var non funziona e con let si */
    elements[i].addEventListener('click',function() {
        if (isInArray(i + 1,bombsArray)) {
            alert('hai perso, totalizzando ' + j + ' punti!');
            location.reload();
        }
        else {
            elements[i].classList += ' white';
            elements[i].innerHTML = bombsAround[i];
            j++;
            document.getElementById('punti').innerHTML = j;
            if (j == last - bombs) {
                alert('hai vinto!');
                location.reload();
            }
        }
    }
    );
}

// /versione grafica

// // versione non grafica

// var userNums = [];
// var bool1 = 'vinto';
// var i = 0;
// while (i < last - bombs && bool1 == 'vinto') {
//     do {
//         userNums[i] = prompt('inserire numero n. ' + (i + 1) + ' ' + 'di ' + (last - bombs));
//         if (isInArray(parseInt(userNums[i]),bombsArray)) {
//             bool1 = 'perso';
//             var userNums = []; /* in caso si volesse ricominciare */
//             var bool2 = prompt('hai ' + bool1 + ', totalizzando ' + i + ' punti. vuoi ricominciare? si/no');
//         }
//         else if ((isInArray(parseInt(userNums[i]),userNums) && userNums.indexOf(userNums[i]) < i) || parseInt(userNums[i]) != userNums[i] || userNums[i] < first || userNums[i] > last) { /* è stato già inserito o è un carattere o valore non valido */
//             alert('valore non valido');
//         }
//     } while (((isInArray(parseInt(userNums[i]),userNums) && userNums.indexOf(userNums[i]) < i) || parseInt(userNums[i]) != userNums[i] || userNums[i] < first || userNums[i] > last) && bool1 == 'vinto')
//     i++;
// }

// if (bool2 == 'si') {
//     location.reload();
// }
// else if (bool2 != 'no' && bool2 != 'si' && bool1 == 'perso') {
//     alert('non ho capito ma ok');
// }

// if (bool1 == 'vinto') {
//     alert('hai ' + bool1 + '!');
// }

// console.log(userNums);

// // /versione non grafica