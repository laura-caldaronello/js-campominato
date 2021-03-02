// lascio commentate delle parti che possono essere la base per la traduzione grafica del gioco (se avrò tempo proverò a farlo)

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

// for (var i = 0; i < last; i++) {
//     document.getElementById('table').innerHTML += '<div class="squares"></div>';
// }

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


// for (var i = 0; i < bombsArray.length; i++) {
//     document.getElementsByClassName('squares')[bombsArray[i]].innerHTML += '<div class="bombs"></div>';
// }

// var elements = document.getElementsByClassName('squares');
// console.log(elements[0]);
// elements[0].classList.add('grey');
// console.log(elements[0]);

// for (var i = 0; i < last; i++) {
//     elements[i].addEventListener('click',function() {
//         elements[i].classList.add('grey');
//     }
//     );
// }

var userNums = [];
var bool1 = 'vinto';
var i = 0;
while (i < last - bombs && bool1 == 'vinto') {
    do {
        userNums[i] = prompt('inserire numero n. ' + (i + 1) + ' ' + 'di ' + (last - bombs));
        if (isInArray(parseInt(userNums[i]),bombsArray)) {
            bool1 = 'perso';
            var userNums = []; /* in caso si volesse ricominciare */
            var bool2 = prompt('hai ' + bool1 + ', totalizzando ' + i + ' punti. vuoi ricominciare? si/no');
        }
        else if ((isInArray(parseInt(userNums[i]),userNums) && userNums.indexOf(userNums[i]) < i) || parseInt(userNums[i]) != userNums[i] || userNums[i] < first || userNums[i] > last) { /* è stato già inserito o è un carattere o valore non valido */
            alert('valore non valido');
        }
    } while (((isInArray(parseInt(userNums[i]),userNums) && userNums.indexOf(userNums[i]) < i) || parseInt(userNums[i]) != userNums[i] || userNums[i] < first || userNums[i] > last) && bool1 == 'vinto')
    i++;
}

if (bool2 == 'si') {
    location.reload();
}
else if (bool2 != 'no' && bool2 != 'si') {
    alert('non ho capito ma ok');
}

if (bool1 == 'vinto') {
    alert('hai ' + bool1 + '!');
}

console.log(userNums);
