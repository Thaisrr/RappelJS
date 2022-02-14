function sum(a, b = 10, c = 20) {
    console.log(`Somme de ${a} + ${b} = ${a + b}`);
    return a + b;
}

let result = sum(20, 10);
sum(30);

/*
On peut ajouter une valeur par défaut au(x) dernier(s) paramétre(s) d'une fonction
Ils deviennent alors optionnels
 */

// Cette fonction prend entre 0 et n paramétres
function sum2(...numbs) {
    // numbs est un tableau
    //... cf rappel tableaux
}

sum2(2, 3, 4, 90, 100);


function logMessage1(a) {
    console.log(a);
}

const logMessage2 = function (a) {
    console.log(a);
}

logMessage1('Coucou');
logMessage2('Coucou aussi');


function doStuffNTime(n, doStuff) {
    for(let i = 0; i < n; i++ ) {
        doStuff(i);
    }
}

doStuffNTime(10, function (i) {
    console.log("Coucou ", i);
});



const sum3 = (a, b) => a + b;
// Sur une seule ligne, sans accolades : le retour est implicite

console.log(sum3(10, 10)); // 20
result = sum3(30, 90);

// Pour des retours qui prennent plusieurs lignes ( objets, ... ),
// On peut mettre le retour entre ()
const message = (name) => ("Bonjour " + name +
    "comment ça va ?"); // mauvais exemple

const sum4 = (a, b) => {
    // faire des trucs
    // si besoin d'un retour : on met le mot clef
    return a + b;
}

// Contexte et utilisation

// Attend 1 fonction, et un temps ( en ms )
setInterval(  () => {
    console.log("In interval")
}, 2000 );



