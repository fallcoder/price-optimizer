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

    // définir le % de réduction
    const reduce = 20;

    // calculer la réduction
    const discount = (oldPrice * reduce) / 100;

    // afficher le prix après réduction
    // la method toFixed permet de convertir le résultat avec deux décimales
    console.log("le prix après réduction est : " + (oldPrice - discount).toFixed(2));

    // fermer l'interface readline après l'affichage du résultat
    r1.close();
  });
}

// appeler la fonction pour exécuter le projet
calculateDiscountedPrice();
