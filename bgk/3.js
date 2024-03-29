// Competencies: Functions + Loopings
/*
==============
Three Cols Box
==============
Instruksi
=========
Buatlah sebuah function bernama drawSymbolicColsBox yang menjalankan proses dengan menggunakan looping
(boleh dengan while atau for) dan menerima satu parameter bernama height.
Buatlah sebuah pola pemunculan simbol @, $, dan * di log (dengan console.log()),
dimana @ mewakili kelipatan ganjil, $ kelipatan genap, dan * khusus kelipatan 3. berurut sebagai berikut:

contoh 1 (drawThreeColsBox(3)):
@ $ *
$ @ *
@ $ *

contoh 2 (drawThreeColsBox(5)):
@ $ * $ @
* @ $ * $
@ * @ $ *
$ @ * @ $
* $ @ * @
contoh 3 (drawThreeColsBox(1)):
@
Note: pola symbol harus dimulai dari 1, dan setiap symbol diberikan spasi.
tinggi kotak sesuai dengan nilai variable height!

[RULE]
- WAJIB menggunakan pseudocode

*/
let num = 5;

// write your code ...
drawThreeColsBox(num);

function drawThreeColsBox (num){
    for (i = 0; i < num ; i++){
        let output = "";
        let noUrut;
        for (j=1; j <= num ; j++) {
            noUrut = j + (i * num);

            if (output != "") {
                output += " ";
            }

            if ((noUrut % 2 != 0) && (noUrut % 3 != 0)) {
                output += "@";
            } else if (noUrut % 3 == 0) {
                output += "*";
            } else {
                output += "$"
            }
        }

        console.log (output);
    }
}