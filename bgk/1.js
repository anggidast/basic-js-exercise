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

let medals = 'GSB'
// your code here

poinCalculator(medals);

function poinCalculator(medali){
    let jlhGold, jlhSilver, jlhBronze, total;
    let output = "";

    jlhGold = 0;
    jlhSilver = 0;
    jlhBronze = 0;
    total = 0;

    for (let i=0; i < medali.length; i++){
        switch (medali[i]){
            case "G":
                jlhGold += 1;
                total += 2;
                break;
            case "S":
                jlhSilver += 1;
                total += 1;
                break
            case "B":
                jlhBronze += 1;
                total += 0.5;
                break
        }
    }

    if (jlhGold != 0){
        output += "jumlah Gold : " + jlhGold;
    }

    if (jlhSilver != 0){
        output += (output != ""?", ":"") + "jumlah Silver : "  + jlhSilver;
    }

    if (jlhBronze != 0) {
        output += (output != ""?", ":"") + "jumlah Bronze : " + jlhBronze;
    }

    if (output != ""){
        output += ". Dan Totalnya adalah: " + total;
    } else {
        output += "Tidak Ada Medali";
    }

    console.log(output);
}