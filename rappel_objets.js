class User {
    #firstname;
    lastname;
    username;
    email;
    age;
    role = "USER";

    constructor(firstname, lastname, email) {
        this.#firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.username = `${firstname} ${lastname}`;
        this._firstname = firstname;
    }

    sayHello() {
        console.log( this.username + " dit bonjour" );
    }

    // Dans une classe, on fait attention au contexte dans une fonction anonyme
    sayHello2 = function () {
        console.log(this.username + " dit bonjour 2");
    }

    sayHello3 = () => console.log(this.username + " dit bonjour 3");

    get firstname() {
        return this.#firstname;
    }

    set firstname(firstname) {
        this.#firstname = firstname;
    }

}


const u = new User('Jean Michel', 'LaTourte', 'jm@mail.fr');
console.log(u.username, u.role, u.age);
u.sayHello();
u.sayHello2();
u.sayHello3();


class Employee extends User {
    job;

    constructor(firstname, lastname, email, job) {
        super(firstname, lastname, email);
        this.job = job;
    }
}

const e = new Employee('Jane', 'Doe', "jdoe@mail.fr", 'Développeuse');
e.sayHello();

const isEmployee = e instanceof Employee; // true
const isUser = e instanceof User; // true
const isObject = e instanceof Object; // true
const isString = e instanceof String; // false

console.log( typeof e ); // return string "object"

/*
En JS, il n'y a pas d'interface, ni d'enum, par contre en typescript, si.
Il n'y a pas d'abstraction, il n'y a pas de surcharge de méthode ni constructor
 */

console.log(u.firstname);


// Objets littéraux

const book = {
    title : `Frankenstein`,
    author: {
        firstname : 'Mary',
        lastname: 'Shelley',
        nationality: 'English',
        fullname: function () {
            return `${this.firstname} ${this.lastname}`
        },
        fullname2: () => `${this.firstname} ${this.lastname}`, // ne fonctionne pas
        fullname4() {
            return `${this.firstname} ${this.lastname}`
        }
    },
    year : 1880,
    is_read: true,
    awards : ['Prix Goncourts', 'Prix bidule', 'Super prix'],
};

console.log(book.title);
console.log(book.author.fullname2(book)); // undefined undefined

/*
Dans un objet littéral, les méthodes écrites en fléchée ne reconnaissent pas
l'objet comme contexte ( this ).
Le mot clef this fait toujours référence au contexte le plus haut ( Window ).
Il vaut mieux utiliser une syntaxe de fonction classique ou anonyme
 */


book.id = 1;

console.log(book);

const new_prop = 'edition';
book[new_prop] = 'Editions Pingouins';

console.log(book.edition); // Valeur : Editions Pingouins
console.log( book[new_prop] ); // idem

delete book.id; // supprime la propriété 'id'
console.log(book);

for(let prop in book) {
    console.log(prop); // On récupère la propriété, non la valeur
}

// const title = book.title;
// const published_year = book.year;

// Affectation par décomposition / destructuring
const {title, year : published_year, lang = 'en', ...rest} = book;
console.log(title, published_year );

console.log(rest);

const book2 = {
    title, // propriété title = valeur de la variable title
    year : published_year
};


// Fonctionne aussi pour les tableaux :

const fruits = ['Peche', 'Pomme', 'Poire', 'abricot'];
const [a, b, ...c] = fruits;
/*
const a = fruits[0]
const b = fruits[1]
c : [ Poire, Abricot ]
 */
console.log(a);



