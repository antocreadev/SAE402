/*


Ce code utilise window.DeviceMotionEvent pour détecter les appareils Android et window.DeviceOrientationEvent pour détecter les appareils iOS. La fonction deviceMotionHandler est utilisée pour détecter une secousse sur les appareils Android, tandis que la fonction deviceOrientationHandler est utilisée pour détecter une secousse sur les appareils iOS.


*/

// Vérifier si l'appareil prend en charge le gyroscope
if (window.DeviceOrientationEvent && "ontouchstart" in window) {
  // Ajouter un écouteur d'événement pour le gyroscope
  window.addEventListener("devicemotion", function (event) {
    // Récupérer les données du gyroscope
    var acceleration = event.accelerationIncludingGravity;
    var rotation = event.rotationRate;

    // Calculer la vitesse angulaire totale de l'appareil
    var totalRotation =
      Math.abs(rotation.alpha) +
      Math.abs(rotation.beta) +
      Math.abs(rotation.gamma);

    // Calculer la force de la secousse
    var shakeThreshold = 100;
    var shakeX = Math.abs(acceleration.x) > shakeThreshold ? 1 : 0;
    var shakeY = Math.abs(acceleration.y) > shakeThreshold ? 1 : 0;
    var shakeZ = Math.abs(acceleration.z) > shakeThreshold ? 1 : 0;

    // Si la vitesse angulaire totale ou la force de la secousse est suffisamment grande, afficher une alerte
    if (totalRotation > shakeThreshold || shakeX + shakeY + shakeZ > 1) {
      document.body.style.backgroundColor = "white";
    }
  });
} else {
  console.log("Le gyroscope n'est pas disponible sur cet appareil.");
}

// Détecter une secousse ou un mouvement de secousse
if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", deviceMotionHandler, false);
  document.body.style.backgroundColor = "green";
} else {
  console.log(
    "L'accéléromètre et la boussole ne sont pas disponibles sur cet appareil."
  );
  document.body.style.backgroundColor = "red";
}
if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", deviceOrientationHandler, false);
  document.body.style.backgroundColor = "white";
} else {
  console.log(
    "L'accéléromètre et la boussole ne sont pas disponibles sur cet appareil."
  );
  document.body.style.backgroundColor = "red";
}

// Fonction pour gérer les événements de mouvement de l'appareil
function deviceMotionHandler(eventData) {
  var acceleration = eventData.accelerationIncludingGravity;
  var threshold = 2;

  // Calculer la force de la secousse
  var shakeX = Math.abs(acceleration.x - gravity.x);
  var shakeY = Math.abs(acceleration.y - gravity.y);
  var shakeZ = Math.abs(acceleration.z - gravity.z);

  // Si la secousse est suffisamment forte, afficher une alerte
  if (shakeX > threshold || shakeY > threshold || shakeZ > threshold) {
    document.body.style.backgroundColor = "blue";
  }
}

// Fonction pour gérer les événements d'orientation de l'appareil
function deviceOrientationHandler(eventData) {
  var threshold = 2;

  // Calculer l'angle de rotation autour de l'axe Z (vertical)
  var rotation = eventData.alpha;

  // Si l'angle de rotation est suffisamment grand, afficher une alerte
  if (rotation > threshold) {
    document.body.style.backgroundColor = "blue";
  }
}

// Obtenir les valeurs de gravité
var gravity = {
  x: 0,
  y: 0,
  z: 0,
};
window.addEventListener(
  "devicemotion",
  function (event) {
    // Récupérer les données de l'accéléromètre
    var acceleration = event.accelerationIncludingGravity;

    // Calculer la moyenne pondérée pour la gravité
    gravity.x = gravity.x * 0.9 + acceleration.x * 0.1;
    gravity.y = gravity.y * 0.9 + acceleration.y * 0.1;
    gravity.z = gravity.z * 0.9 + acceleration.z * 0.1;
  },
  true
);
