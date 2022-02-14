
let fruits = ['Pomme', 'Poire', 'Abricot'];
//let fruits = [];

fruits.push('Mangue');

// Les tableaux commencent à 0
console.log( fruits[0] );
console.log( fruits.length );

fruits.push(42);
console.log(fruits);

let index = fruits.indexOf(42);

const deleted = fruits.pop(); // Supprime le dernier élément

fruits.splice(index, 1);
// Supprime 1 élément à l'index donné et retourne un tableau d'éléments supprimés

// Res : tableau de fruits dont le nom commence par 'M'
const res = fruits.filter( (fruit) => fruit.charAt(0) === 'M' )
// Callback des méthodes d'array :
/* -> prennent en paramétre : ( dans l'ordre )
  - l'élément sur lequel on itère
  - l'index de l'élément
  - le tableau
  => Il n'y a pas d'obligation de récupérer tous ces éléments
  => Les noms donnés aux paramètres n'influent pas sur les éléments récupérer, c'est toujours
  la même chose dans le même ordre
  => Les callbacks doivent souvent retourner quelque chose
 */

const modified = fruits.map( (el) => el.toUpperCase() );
// modified : copie de fruit, avec les noms de fruit en majuscule


// Boucler sur un tableau :

for(let i = 0; i < fruits.length; i++) {
    console.log( fruits[i] );
    fruits[i] += 's';
}

for(let f of fruits) {
    console.log(f);
    f = undefined; // ça ne modifie pas le tableau de base
}

fruits.forEach( (f, i) => {
    console.log(f);
    f = null;
} )


console.log(fruits);
