const circleWhite = document.querySelector("#circleWhite");

const imgRed = document.querySelector("#imgRed");
const imgGreen = document.querySelector("#imgGreen");
const imgBlue = document.querySelector("#imgBlue");
console.log(circleWhite);

// AUDIO
// 1
var audio1 = new Audio();
audio1.src = "sound/Laudate-Dominum-Seconda.mp3";
const audioContext_audio1 = new AudioContext();
const source_audio1 = audioContext_audio1.createMediaElementSource(audio1);
const analyser_audio1 = audioContext_audio1.createAnalyser();
source_audio1.connect(analyser_audio1);
analyser_audio1.connect(audioContext_audio1.destination);
// Configurer l'analyseur
analyser_audio1.fftSize = 2048;
const bufferLength_audio1 = analyser_audio1.frequencyBinCount;
const dataArray_audio1 = new Uint8Array(bufferLength_audio1);

// AUDIO 2
var audio2 = new Audio();
audio2.src = "sound/Laudate-Dominum-Terza.mp3";
const audioContext_audio2 = new AudioContext();
const source_audio2 = audioContext_audio2.createMediaElementSource(audio2);
const analyser_audio2 = audioContext_audio2.createAnalyser();
source_audio2.connect(analyser_audio2);
analyser_audio2.connect(audioContext_audio2.destination);
// Configurer l'analyseur
analyser_audio2.fftSize = 2048;
const bufferLength_audio2 = analyser_audio2.frequencyBinCount;
const dataArray_audio2 = new Uint8Array(bufferLength_audio2);

// AUDIO 3
var audio3 = new Audio();
audio3.src = "sound/Laudate-Dominum-Bassu.mp3";
const audioContext_audio3 = new AudioContext();
const source_audio3 = audioContext_audio3.createMediaElementSource(audio3);
const analyser_audio3 = audioContext_audio3.createAnalyser();
source_audio3.connect(analyser_audio3);
analyser_audio3.connect(audioContext_audio3.destination);
// Configurer l'analyseur
analyser_audio3.fftSize = 2048;
const bufferLength_audio3 = analyser_audio3.frequencyBinCount;
const dataArray_audio3 = new Uint8Array(bufferLength_audio3);

// Obtenir les données audio en temps réel
function getAudioData() {
  requestAnimationFrame(getAudioData);

  // AUDIO 1
  analyser_audio1.getByteFrequencyData(dataArray_audio1);
  const gain1 = dataArray_audio1[0];
  const frequency1 = dataArray_audio1[Math.floor(bufferLength_audio1 / 2)];
  imgGreen.style.opacity = `${gain1 / 255}`;

  // AUDIO 2
  analyser_audio2.getByteFrequencyData(dataArray_audio2);
  const gain2 = dataArray_audio2[0];
  const frequency2 = dataArray_audio2[Math.floor(bufferLength_audio2 / 2)];
  imgRed.style.opacity = `${gain2 / 255}`;

  // AUDIO 3
  analyser_audio3.getByteFrequencyData(dataArray_audio3);
  const gain3 = dataArray_audio3[0];
  const frequency3 = dataArray_audio3[Math.floor(bufferLength_audio3 / 2)];
  imgBlue.style.opacity = `${gain3 / 255}`;
}

// Démarrer l'analyse audio
getAudioData();

circleWhite.addEventListener("click", () => {
  // add class
  circleWhite.classList.add("animCircleWhite");
  setTimeout(() => {
    //---------------------------- GREEN SECONDA
    // audio play

    audio1.play();
    // animation
    imgGreen.classList.add("animImgGreen");

    ///----------------------------RED BASSU

    audio2.play();
    ///----------------------------BLUE TERZA
    audio3.play();
  }, 2000);

  // RED BASSU
  setTimeout(() => {
    imgRed.classList.add("animImgRed");
  }, 7400 + 2000);

  // BLUE TERZA
  setTimeout(() => {
    imgBlue.classList.add("animImgBlue");
  }, 2200 + 2000);
  //
});
