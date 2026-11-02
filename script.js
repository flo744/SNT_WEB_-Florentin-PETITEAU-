javascript

function afficherMessage() {

    document.getElementById("message").innerHTML =
        "🟡🟢 Allez Nantes ! Les Canaris sont les meilleurs ! 🟢🟡";

}



function modifierTexte() {

    document.getElementById("texte").innerHTML =
        "⚽ Bienvenue dans l'univers du FC Nantes !";

}




function changerCouleur() {

    document.body.style.backgroundColor = "#fff200";

}



let imageActuelle = 1;

function changerImage() {

    imageActuelle++;

    if (imageActuelle > 3) {

        imageActuelle = 1;

    }

    document.getElementById("imageNantes").src =
        "images/nantes" + imageActuelle + ".jpg";

}


let compteur = 0;

function augmenterCompteur() {

    compteur++;

    document.getElementById("compteur").innerHTML =
        compteur;

}


function resetCompteur() {

    compteur = 0;

    document.getElementById("compteur").innerHTML =
        compteur;

}

function calculer() {

    let nombre1 =
        Number(document.getElementById("nombre1").value);

    let nombre2 =
        Number(document.getElementById("nombre2").value);

    let operation =
        document.getElementById("operation").value;

    let resultat;


    if (operation === "+") {

        resultat = nombre1 + nombre2;

    }

    else if (operation === "-") {

        resultat = nombre1 - nombre2;

    }

    else if (operation === "*") {

        resultat = nombre1 * nombre2;

    }

    else if (operation === "/") {

        if (nombre2 === 0) {

            resultat = "Impossible de diviser par zéro";

        }

        else {

            resultat = nombre1 / nombre2;

        }

    }


    document.getElementById("resultatCalcul").innerHTML =
        "Résultat : " + resultat;

}


function envoyerFormulaire(event) {

    event.preventDefault();

    let nom =
        document.getElementById("nom").value;

    document.getElementById("confirmation").innerHTML =
        "Merci " + nom + " ! Ton message a bien été pris en compte.";

}
```
```javascript

let points = 0;



function ajouterPoints(nombre) {

    points = points + nombre;

    document.getElementById("points").innerHTML = points;

    document.getElementById("scoreFinal").innerHTML =
        "🏆 Ton score actuel est de " + points + " points !";

}




function reinitialiserPoints() {

    points = 0;

    document.getElementById("points").innerHTML = points;

    document.getElementById("scoreFinal").innerHTML =
        "Ton score a été remis à zéro.";

}



let tempsRestant = 10;

let jeuEnCours = false;

let intervalleJeu;




function demarrerJeu() {

    if (jeuEnCours === true) {

        return;

    }


    jeuEnCours = true;

    tempsRestant = 10;

    document.getElementById("temps").innerHTML =
        tempsRestant;

    document.getElementById("messageJeu").innerHTML =
        "🎮 C'est parti ! Clique sur le Canari !";


    intervalleJeu = setInterval(function() {

        tempsRestant--;

        document.getElementById("temps").innerHTML =
            tempsRestant;


        if (tempsRestant <= 0) {

            clearInterval(intervalleJeu);

            jeuEnCours = false;

            document.getElementById("messageJeu").innerHTML =
                "⏰ Temps terminé !";

        }

    }, 1000);

}




function attraperCanari() {

    if (jeuEnCours === false) {

        document.getElementById("messageJeu").innerHTML =
            "⚠️ Clique d'abord sur « Commencer le jeu » !";

        return;

    }


    ajouterPoints(1);


    document.getElementById("messageJeu").innerHTML =
        "🐤 Bien joué ! +1 point !";


    /* Déplacement du Canari */

    let zone =
        document.getElementById("zoneJeu");

    let canari =
        document.getElementById("canari");


    let x =
        Math.random() *
        (zone.clientWidth - canari.offsetWidth);


    let y =
        Math.random() *
        (zone.clientHeight - canari.offsetHeight);


    canari.style.left = x + "px";

    canari.style.top = y + "px";

}




let quizTermine = false;




function reponseQuiz(reponse) {


    if (quizTermine === true) {

        return;

    }


    if (reponse === "Nantes") {

        ajouterPoints(5);

        document.getElementById("resultatQuiz").innerHTML =
            "✅ Bonne réponse ! +5 points !";

    }

    else {

        document.getElementById("resultatQuiz").innerHTML =
            "❌ Mauvaise réponse !";

    }


    quizTermine = true;

}



function verifierQCM() {


    let choix =
        document.querySelector(
            'input[name="qcm"]:checked'
        );


    if (choix === null) {

        document.getElementById("resultatQCM").innerHTML =
            "⚠️ Choisis une réponse.";

        return;

    }


    if (choix.value === "canaris") {

        ajouterPoints(5);

        document.getElementById("resultatQCM").innerHTML =
            "✅ Excellente réponse ! +5 points !";

    }

    else {

        document.getElementById("resultatQCM").innerHTML =
            "❌ Mauvaise réponse.";

    }

}
```
```javascript


let points = 0;


/* Ajouter des points */

function ajouterPoints(nombre) {

    points = points + nombre;

    document.getElementById("points").innerHTML = points;

    document.getElementById("scoreFinal").innerHTML =
        "🏆 Ton score actuel est de " + points + " points !";

}


function reinitialiserPoints() {

    points = 0;

    document.getElementById("points").innerHTML = points;

    document.getElementById("scoreFinal").innerHTML =
        "Ton score a été remis à zéro.";

}




let tempsRestant = 10;

let jeuEnCours = false;

let intervalleJeu;




function demarrerJeu() {

    if (jeuEnCours === true) {

        return;

    }


    jeuEnCours = true;

    tempsRestant = 10;

    document.getElementById("temps").innerHTML =
        tempsRestant;

    document.getElementById("messageJeu").innerHTML =
        "🎮 C'est parti ! Clique sur le Canari !";


    intervalleJeu = setInterval(function() {

        tempsRestant--;

        document.getElementById("temps").innerHTML =
            tempsRestant;


        if (tempsRestant <= 0) {

            clearInterval(intervalleJeu);

            jeuEnCours = false;

            document.getElementById("messageJeu").innerHTML =
                "⏰ Temps terminé !";

        }

    }, 1000);

}



function attraperCanari() {

    if (jeuEnCours === false) {

        document.getElementById("messageJeu").innerHTML =
            "⚠️ Clique d'abord sur « Commencer le jeu » !";

        return;

    }


    ajouterPoints(1);


    document.getElementById("messageJeu").innerHTML =
        "🐤 Bien joué ! +1 point !";


    /* Déplacement du Canari */

    let zone =
        document.getElementById("zoneJeu");

    let canari =
        document.getElementById("canari");


    let x =
        Math.random() *
        (zone.clientWidth - canari.offsetWidth);


    let y =
        Math.random() *
        (zone.clientHeight - canari.offsetHeight);


    canari.style.left = x + "px";

    canari.style.top = y + "px";

}




let quizTermine = false;


/* Vérifier la réponse */

function reponseQuiz(reponse) {


    if (quizTermine === true) {

        return;

    }


    if (reponse === "Nantes") {

        ajouterPoints(5);

        document.getElementById("resultatQuiz").innerHTML =
            "✅ Bonne réponse ! +5 points !";

    }

    else {

        document.getElementById("resultatQuiz").innerHTML =
            "❌ Mauvaise réponse !";

    }


    quizTermine = true;

}




function verifierQCM() {


    let choix =
        document.querySelector(
            'input[name="qcm"]:checked'
        );


    if (choix === null) {

        document.getElementById("resultatQCM").innerHTML =
            "⚠️ Choisis une réponse.";

        return;

    }


    if (choix.value === "canaris") {

        ajouterPoints(5);

        document.getElementById("resultatQCM").innerHTML =
            "✅ Excellente réponse ! +5 points !";

    }

    else {

        document.getElementById("resultatQCM").innerHTML =
            "❌ Mauvaise réponse.";

    }

}
     <script>

        let quantite = 0;

        function mettreAJourPanier() {

            document.getElementById("quantite").innerHTML = quantite;

            let total = quantite * 10;

            document.getElementById("total").innerHTML = total;
        }


        function ajouterAuPanier() {

            quantite++;

            mettreAJourPanier();

            document.getElementById("messageCommande").innerHTML =
                "🐤 La peluche a été ajoutée au panier !";
        }


        function retirerDuPanier() {

            if (quantite > 0) {

                quantite--;

                mettreAJourPanier();

                document.getElementById("messageCommande").innerHTML =
                    "La peluche a été retirée du panier.";

            } else {

                document.getElementById("messageCommande").innerHTML =
                    "⚠️ Ton panier est déjà vide.";
            }
        }


        function viderPanier() {

            quantite = 0;

            mettreAJourPanier();

            document.getElementById("messageCommande").innerHTML =
                "🗑️ Ton panier a été vidé.";
        }


        function commander() {

            if (quantite === 0) {

                document.getElementById("messageCommande").innerHTML =
                    "⚠️ Ton panier est vide !";

            } else {

                let total = quantite * 10;

                document.getElementById("messageCommande").innerHTML =
                    "🎉 Commande validée ! " +
                    quantite +
                    " peluche(s) pour " +
                    total +
                    " €.";
            }
        }

    </script>

</body>

</html>
*javascript
/* ================================= */
/* PALMARES */
/* ================================= */

function afficherPalmares() {

    document.getElementById("resumePalmares").innerHTML =
        "🟡🟢 Le FC Nantes compte 8 titres de champion de France, " +
        "4 Coupes de France, 3 Trophées des Champions et " +
        "3 Coupes Gambardella ! 🏆";
}
