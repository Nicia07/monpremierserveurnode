// Import du framework Express.js
//import express from "express"
const express = require('express'); // Utilisation de require pour importer le module

// Création de l'application Express.js
const app = express();


/*app.use((req,res)=> {
    res.json({messsage : "Votre message a bien été recue"});
});*/

app.get("/", (req, res) => {
    res.end("Jeje, wami serveur");
});

app.get("/service", (req, res) => {
    res.end("Alors cette page de service !");
});

app.get("/apropos", (req, res) => {
    res.end("Bienvenue a ma page de présentation");
});

app.get("/acceuill", (req, res) => {
    res.end("Bienvenue a notre acceuill");
});


app.post("/contact", (req, res)=> {
    res.end("Bonjour, contacté nous!");
});// je suis dans l'app, j'ai ecrit la methode 
//post apreé je suis rentré dans la route contact aprés 
//


app.delete("/supprimer", (req, res)=> {
    res.end("Bonjour, supprimé le msg !");
});

app.put("/envoie", (req, res)=> {
    res.end("Salut, envoie un msg c'est urgent !");
});
 




// Middleware pour gérer toutes les requêtes
/*app.use((req, res) => {
    res.end("Bonjour, je suis le serveur");
});

// Route GET pour "/Bonjour"
/*app.get("/Bonjour", (req, res) => {
    res.end("Akori anao ?");
});

/*app.get("/Bonjour", (req, res) => {
    res.send("Akori anao ?");
});

// Route GET pour "/"
app.get("/", (req, res) => {
    res.end("Jéjé, wami serveur");
});

// Lancement du serveur sur le port 3001
/*app.listen(3001, () => {
    console.log("Serveur");
});
*/
module.exports = app; 
