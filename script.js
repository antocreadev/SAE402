let SHAKE_THRESHOLD = 10;
let lastX = null;
let lastY = null;
let lastZ = null;
let lastUpdate = null;

window.addEventListener('deviceorientation', function(event) {
  if (lastUpdate) {
    let timeDifference = event.timeStamp - lastUpdate;
    if (timeDifference < 100) {
      return;
    }

    let deltaX = event.gamma - lastX;
    let deltaY = event.beta - lastY;
    let deltaZ = event.alpha - lastZ;

    let speed = Math.abs(deltaX + deltaY + deltaZ - lastUpdate) / timeDifference * 10000;

    if (speed > SHAKE_THRESHOLD) {
      document.body.style.backgroundColor = "red";
      console.log('Shake detected!');
    }
  }

  lastUpdate = event.timeStamp;
  lastX = event.gamma;
  lastY = event.beta;
  lastZ = event.alpha;
});
