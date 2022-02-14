/* Les types :
- number
- String
- Booleans
- null, undefined
- objet : objets natifs : dates, maths, string, array ...
- Array
- fonctions
 */

let a = 23;
const b = "Coucou";
// var : pas beau -> ancien JS

a = "Toto";
a = true;
a = b.length > 5;
// > < >= <= === !==
// && ||



/*
falsy : false, undefined, null, tableau vide [], objet vide, 0, 0.0...
truthy : la valeur n'est ni null, undefined, ou vide... quand elle n'est pas falsy
 */
let c;
console.log(c); // undefined

if(c) { // C !== undefined || c !== null || c !== "" ....
    // on fait quelque chose si c n'est pas undefined
} else {
    // c est falsy
}

if(!c) {
    // On fait quelque chose si c est falsy
}

let bool = (c); // undefined
console.log(bool);
bool = c; // même valeur que c
console.log(bool);
bool = !c; // true si c est falsy
/*
si c est truthy : bool = true
 */
bool = !!c; // false si c est falsy

// Expression ternaire
let message = (c)? 'C est défini' : 'C est undefined';


// + : concaténation
message = "Coucou " + b;
message += " !!";


// OU : addition ( sur des numbers )
let numb = 20 + 10;
numb += 5; // numb = numb + 5 : 35

let x = 2;
let y = "1";
let z = 3;
let result = x + y; // 21
console.log("X + Y = ", result);
result = z + x + y; // 2 + 3 = 5, concaténer 5 et 1
console.log(result); // 51 -> string
result += 2; // concaténation
console.log(result); // 512

// Caster en number
result = x + Number(y);
let numb_y = +y;
result = x + numb_y;

y = "toto";
numb_y = Number(y); // numb_y = NaN ( Not a Number )

// isNaN(n) : retourne true si le nombre est NaN
result = (isNaN(numb_y))? 0 :  x + numb_y;
console.log(result);


// Ne teste que la première valeur
if(23 < 10 && 0 === 0) {
    // Do something
}

if(20 > 10 || 10 === 10) {

}

c &&= "toto";
// Est-ce que c est true ( truthy ) ?
// Si oui, on affecte la valeur toto
// equivalent :
if(c) {
    c = "toto";
}


c ||= "Toto";
// Si c est falsy, alors affecte la valeur "Toto"
// équivalent :
if(!c) {
    c = "Toto"
}

c ??= "Toto";
// Si C est undefined, alors affecte la valeur "Toto"


// Par la suite Rappel Fonction / Objets JS
// Rappel arrays ( syntaxe )
// Léger rappel DOM
