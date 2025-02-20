// importer le framework Express.js
// import express from "express";
// Importation du module 'express' qui permet de créer une application web
const express = require("express");

// Importation du module 'url' de Node.js pour manipuler les URL
const url = require('url');

// Importation du module 'fs' (File System) de Node.js pour interagir avec les fichiers sur le serveur
const fs = require('fs'); // Le module 'fs' permet de manipuler des fichiers sur le système

// Crée l'application Express.js et la stocke dans la variable 'app'
// Cette application Express est maintenant prête à recevoir des requêtes HTTP
const app = express(); 


/* le serveur retourne la réponse ci-dessous peu importe la requête
app.use((req, res) => {
    res.json({message : "Votre message a bien été reçu"});
}) */




// on va définir une route de type GET
// Route par défaut pour l'URL racine ("/")
// Cette route répond aux requêtes GET à la racine de l'application.
app.get("/", (req, res) => { 
    // La méthode writeHead() permet de spécifier le code de statut HTTP et les en-têtes
    res.writeHead(200, {
        'Content-type' : 'text/html;charset=UTF-8'  // Définit l'encodage du contenu comme UTF-8
    });
    // Ecriture d'une réponse HTML dans la réponse
    res.write("<b>Bonjour, dagoni woho, vanou paka Kawéni</b>");
    // Fin de la réponse
    res.end();
});

// Route "/accueil" qui renvoie un fichier HTML
app.get("/accueil", (req, res) => {
    // Utilisation de la fonction readFile du module fs pour lire le fichier fr.htm
    fs.readFile("fr.htm", (err, data) => {
        if (err) {
            // Si le fichier n'est pas trouvé (erreur), renvoie un code 404 (fichier introuvable)
            res.writeHead(404);
            res.write("le fichier est introuvable");
        } else {
            // Si le fichier est trouvé, renvoie un code 200 et les données du fichier
            res.writeHead(200, {
                "content-type" : "text/html"
            });
            res.write(data);
        }
        res.end();  // Fin de la réponse
    });
});

// Route "/apropos" qui renvoie une réponse textuelle
app.get("/apropos", (req, res) => {
    res.end("Qui sommes-nous");
});

// Route "/services" qui renvoie une réponse textuelle
app.get("/services", (req, res) => {
    res.end("Les propositions");
});

// Route "/contact" qui renvoie une réponse textuelle
app.get("/contact", (req, res) => {
    res.end("Le formulaire à remplir");
});

// Route "/formulaire" qui répond à une requête POST
app.post("/formulaire", (req, res) => {
    res.end("Ton formulaire doit être à jour");
});

// Route "/accueil" qui répond à une requête PUT (pour modifier des données)
app.put("/accueil", (req, res) => {
    res.end("Welcome to my home");
});

// Route "/services" qui répond à une requête DELETE (pour supprimer des données)
app.delete("/services", (req, res) => {
    res.end("On a supprimé l'onglet services");
});

// Route API "/api/nom" qui renvoie des données au format JSON
app.get("/api/nom", (req, res, next) => {
    const monObjet = [{
        nom : "ABDOU",
        prenom : "Kamal"
    }];
    // Renvoie la réponse en format JSON avec le code de statut 200 (OK)
    res.status(200).json(monObjet);
});

// Route "/api/url" qui renvoie l'URL demandée dans la requête
app.get("/api/url", (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});  // Définir l'en-tête comme texte HTML
    res.write(req.url);  // Renvoie l'URL de la requête
    res.end();  // Fin de la réponse
});

// Route "/param" qui renvoie des paramètres de la requête (query parameters)
app.get("/param", (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});  // Définit l'en-tête comme texte HTML
    // Renvoie les paramètres 'mois' et 'annee' de la requête
    res.end(req.query.mois + " " + req.query.annee);
});

// Export de l'application pour utilisation dans un autre fichier (par exemple, server.js)
module.exports = app;
