/*
Requêtes HTTP ( du point du vue front )
https://monapi.com/produit/1
https://monapi.com/produit?category=bidule
GET => Donnée dans l'URL, pour récupérer une donnée

POST => Créer des données dans le back ( ou persister )
PATCH => Modifier partiellement des données
PUT => Remplacer des données

DELETE => Supprimer des données

 */


const url = "https://jsonplaceholder.typicode.com/";
const user_url = url + "users";

console.log("Coucou 1");
let users = [];

function displayUsers() {
    users.forEach(u => {
        const li = document.createElement("li");
        li.textContent = u.name;
        document.querySelector('#ul').appendChild(li);
    })
}

// fait un get sur l'url passée en paramètre
fetch(user_url)
    .then( (res) => res.json()) // spécificité de fetch
    .then( res_users => {
        users = res_users;
        displayUsers();
    })

console.log("Coucou 2");
console.log(users); // undefined





// Fausse promesse


function myFetch(url) {
    const random = Math.random(); // retourne un random entre 0 et 1
    return new Promise( (succes, rejet) => {
        if(random > 0.5) {
            succes('Youhouh !');
        } else {
            rejet(new Error('NOPE !'));
        }
    })
}

console.log('Before myFetch');
myFetch('url')
    .then(function (response) {
        const p = document.createElement('p');
        p.textContent = response.toString();
        p.style.color = 'green';
        document.querySelector('body').appendChild(p);
    })
    .catch(function (error) {
        const p = document.createElement('p');
        p.textContent = error;
        p.style.color = 'red';
        document.querySelector('body').appendChild(p);
    })
    .finally(() => alert("Opération terminée"))


console.log('After my Fetch');


// Async Await

// retourne une promesse
async function getUsers() {
    try {
        const response = await fetch(user_url);
        users = await response.json();
        console.log(users);
        displayUsers();
    } catch (err) {
        alert(err)
    } finally {
        // si besoin
    }
}

getUsers();


// Axios : librairie pour faire des requêtes HTTP
// Ajouté ici en lien CDN dans le <head> du HTML

const post_url = url + "posts";

function getPosts1() {
    axios.get(post_url)
        .then(res => console.log(res.data))
}

async function getPosts2() {
    const res = await axios.get(post_url);
    const posts = res.data;
    //... on traite "posts"

   // const {data : posts} = await axios.get(post_url);
}

getPosts2();
getPosts1();

const new_todo = {
    userId: 2,
    title: 'Comprendre Ajax',
    completed: false
}
const todo_url = url + 'todos';

function createTodo1() {
    axios.post(todo_url, new_todo)
        .then(res => console.log(res))
        .catch(err => console.warn(err));
}

async function createTodo2() {
    try {
        const res = await axios.post(todo_url, new_todo);
        console.log(res)
    } catch (err) {
        console.warn(err)
    }
}

function createTodo3() {
    axios({
        method: 'post',
        url: todo_url,
        data: new_todo
    }).then(res => console.log(res))
}

createTodo1();
createTodo2();
