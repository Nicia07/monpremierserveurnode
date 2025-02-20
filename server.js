// Importer le protocole http 
// require() permet d'importer le package, ici le package,
//Ici le package importé est http
//const http = require('http'); => code selon ES5 (avant 2015)
//import {createServer} from "http";// codage selon ES6 (2015)

// Importation du module 'http' pour créer un serveur HTTP
const http = require('http');

// Importation de l'application Express (assumée comme définie dans 'app.js' ou un fichier similaire)
const app = require('./app');

// Définition du numéro de port sur lequel le serveur va écouter
const numPort = 3002;

// Création du serveur HTTP en utilisant l'application Express (app)
const server = http.createServer(app);

// Crée un objet Date pour obtenir la date et l'heure actuelle
const date = new Date();

// Définition du port de l'application via `app.set` (utile dans un contexte Express)
app.set("port", numPort);

// Le serveur commence à écouter sur le port 3002
server.listen(3002, () => {
    // Affichage de la date et de l'heure actuelle au format local
    console.log(date.toLocaleDateString(), " ", date.toLocaleTimeString());
    
    // Message indiquant que le serveur est activé et fonctionne sur le port 3002
    console.log("Le serveur est activé au port :", numPort);
});



//Déclaration du serveur en utilisant http
// const server = http.createServer((req, res) => {});
// On crée le serveur selon la recommandation ES6
//const server1 = createServer("./app");

/*const server = http.createServer((req,res) => {
    res.end("Bonjour, je suis sereveur.");

//Le serveur est disponible sur le port 3000
 server.listen(3000);
});


// on va lancer le server!
// sur GitBash, exécuter la commande node server
// Sur le navigateur web, taper localhost:3000
// Que signifie "localhost:3000"? 
//localhost signifie le serveur en local,
// c'est-à-dire dans chaque ordinateur,noderJS crée un server local
// Et ce serveur local est exposé au port 3000
// Que retenir du bug rencontré par SAID ?
// Pour lancer le serveur, il faut taper "node"suivi du nom du fichier
// Tel qu'il figure dans le fichier package.json
// A l'exécution de la commade node,
// nodejs lance le fichier JavaScript associé à "main" dans 

/*
===== En résumé =====
1. Le projet NOde est initialisé avec la commande "node init"
2. un serveur Node basique est lancé grace
 à la méthode createserver venant du package http "http.createserver()"
 'req' signifie la requête l'utilisateur effectuée le navigateur web 
 'res' signifi la réponse retournée par le serveur 
 exemple ici le serveur retourne 
 le message "Bonjour, je suis le serveur."
 et c'st grace au code res.end("Bonjour, je suis le serveur.");
*/
