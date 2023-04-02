// Définir un seuil de secousse
var seuilSecousse = 20;

// Variables pour stocker la dernière position
var lastX, lastY, lastZ;

// Ajouter un écouteur d'événements pour l'événement 'devicemotion'
window.addEventListener("devicemotion", function (e) {
  // Obtenir l'accélération sur l'axe X, Y et Z
  var accelerationX = e.accelerationIncludingGravity.x;
  var accelerationY = e.accelerationIncludingGravity.y;
  var accelerationZ = e.accelerationIncludingGravity.z;

  // Vérifier si les valeurs de l'accélération ont changé de manière significative par rapport aux dernières valeurs
  if (
    Math.abs(accelerationX - lastX) > seuilSecousse ||
    Math.abs(accelerationY - lastY) > seuilSecousse ||
    Math.abs(accelerationZ - lastZ) > seuilSecousse
  ) {
    // Une secousse a été détectée
    console.log("Secousse détectée!");
  }

  // Mettre à jour les dernières valeurs
  lastX = accelerationX;
  lastY = accelerationY;
  lastZ = accelerationZ;
});
