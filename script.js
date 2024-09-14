// importer le module readline pour la lecture des entrées utilisateurs via la cli
const readline = require('readline')

// créer une interface pour lire l'entrée utilisateur depuis la cli (stdin) et afficher les informations sur la sortie (stdout)
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// fonction pour calculer le prix apres reduction
function calculateDiscountedPrice() {
  // poser une question à l'utilisateur et obtenir une réponse
  r1.question("entrez le prix initial : ", (priceInput) => {
    // convertir la réponse en nombre virgule flottante
    const oldPrice = parseFloat(priceInput);

    // vérifier si l'utilisateur a entré un prix valide
    if(isNaN(oldPrice) || oldPrice <= 0) {
      console.log("Erreur: veuillez entrer un prix valide");
      askForRetry();  
      return;
    }

    // demander a l'utilisateur de choisir le pourcentage de réduction
    r1.question("choisissez un pourcentage de réduction (20, 50, 70) : ", (reduceInput) => {
      const reduce = parseFloat(reduceInput);

      // vérifier si le pourcentage choisi est valide
      if(![20, 50, 70].includes(reduce)) {
        console.log("Erreur: veuillez entrer un pourcentage valide");
        askForRetry();
        return;
      }

      // calculer la réduction
      const discount = (oldPrice * reduce) / 100;

      // afficher le prix après réduction
      // la method toFixed permet de convertir le résultat avec deux décimales
      console.log("le prix après réduction est : " + (oldPrice - discount).toFixed(2));

      // fermer l'interface readline après l'affichage du résultat
    r1.close();
    });
  });
}

// fonction pour demander a l'utilisateur s'il veut réessayer ou quitter
function askForRetry() {
  r1.question("voulez-vous réessayer ? (oui/non) : ", (response) => {
    if(response.trim().toLowerCase() === "oui") {
      calculateDiscountedPrice()
    }
    else if(response.trim().toLowerCase() === "non") {
      console.log("merci d\'avoir utiliser ce programme !")
      r1.close()
    }
    else {
      console.log("réponse non reconnue. veuillez répondre par 'oui' ou 'non'.")
      askForRetry();
    }
  })
}

// appeler la fonction pour exécuter le projet
calculateDiscountedPrice();
