/*
================
Poin Calculator
================

[INSTRUCTIONS]
Kamu diminta menghitung poin dari sebuah mendali yang didapat dalam sebuah pertandingan.
poinCalculator adalah sebuah function yang menerima satu parameter berupa string.
function tersebut akan menghitung jumlah Gold aka emas (G), Silver aka perak (S) dan Bronze aka perunggu (B) dan function akan mereturn jumlah masing2 mendali dan menghitung total poin secara keseluruhan.
Adapun ketentuannya:
Gold (G) = 2
Silver (S) = 1
Bronze (B) = 0.5

[RULE]
- WAJIB MENYERTAKAN PSEUDOCODE untuk kasus ini
- Hanya boleh menggunakan sintaks for/while, if-else, serta operasi string untuk pemecahan masalah.
- Dilarang menggunakan built in function .map(), .filter() dan .reduce()!
- Dilarang menggunakan regex .match dan lainnya!
- Dilarang menggunakan built in function .indexOf() dan .include()

[EXAMPLE]
poinCalculator("GSB")
output: jumlah Gold: 1, jumlah Silver: 1, jumlah Bronze: 1. Dan totalnya adalah: 3.5
*/

let medals = 'GGSBBB'
// your code here
let poinCalculator = medals => {
    let G = 0,
        S = 0,
        B = 0;
    for (let i = 0; i < medals.length; i++) {
        if (medals[i] == 'G') {
            G += 2;
        } else if (medals[i] == 'S') {
            S += 1;
        } else if (medals[i] == 'B') {
            B += 0.5;
        }
    }
    return `jumlah Gold: ${G}, jumlah Silver: ${S}, jumlah Bronze: ${B}. Dan toyalnya adalah: ${G+S+B}`
}
console.log(poinCalculator(medals));