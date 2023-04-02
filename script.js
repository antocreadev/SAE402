// Détecter une secousse ou un mouvement de secousse
if (window.DeviceMotionEvent) {
  window.addEventListener("devicemotion", deviceMotionHandler, false);
} else {
  document.body.style.backgroundColor = "red";
}

// Fonction pour gérer les événements de mouvement de l'appareil
function deviceMotionHandler(eventData) {
  var acceleration = eventData.accelerationIncludingGravity;
  var threshold = 15;

  // Calculer la force de la secousse
  var shakeX = Math.abs(acceleration.x - gravity.x);
  var shakeY = Math.abs(acceleration.y - gravity.y);
  var shakeZ = Math.abs(acceleration.z - gravity.z);

  // Si la secousse est suffisamment forte, afficher une alerte
  if (shakeX > threshold || shakeY > threshold || shakeZ > threshold) {
    document.body.style.backgroundColor = "blue";
    alert("Secousse détectée!");
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
