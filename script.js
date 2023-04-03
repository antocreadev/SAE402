const circleWhite = document.querySelector("#circleWhite");

const imgRed = document.querySelector("#imgRed");
const imgGreen = document.querySelector("#imgGreen");
const imgBlue = document.querySelector("#imgBlue");
const imgPaghjella = document.querySelector("#imgPaghjella");
console.log(circleWhite);

// Obtenir les données audio en temps réel
function getAudioData(analyser, bufferLength, dataArray, imgElement) {
  requestAnimationFrame(() =>
    getAudioData(analyser, bufferLength, dataArray, imgElement)
  );

  // Obtenir les données audio
  analyser.getByteFrequencyData(dataArray);
  const gain = dataArray[0];
  const frequency = dataArray[Math.floor(bufferLength / 2)];

  // Mettre à jour l'opacité de l'image en fonction des données audio
  imgElement.style.opacity = `${gain / 160}`;
}

// Démarrer l'analyse audio
function startAudioAnalysis(audio, imgElement) {
  const audioContext = new AudioContext();
  const source = audioContext.createMediaElementSource(audio);
  const analyser = audioContext.createAnalyser();
  source.connect(analyser);
  analyser.connect(audioContext.destination);

  // Configurer l'analyseur
  analyser.fftSize = 2048;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  // Démarrer l'analyse audio
  getAudioData(analyser, bufferLength, dataArray, imgElement);
}

circleWhite.addEventListener("click", () => {
  // add class
  circleWhite.classList.add("animCircleWhite");
  setTimeout(() => {
    //---------------------------- GREEN SECONDA
    // audio play
    var audio1 = new Audio();
    audio1.src = "sound/Laudate-Dominum-Seconda.mp3";
    audio1.play();
    // animation
    imgGreen.classList.add("animImgGreen");
    startAudioAnalysis(audio1, imgGreen);

    ///----------------------------RED BASSU
    var audio2 = new Audio();
    audio2.src = "sound/Laudate-Dominum-Bassu.mp3";
    audio2.play();
    startAudioAnalysis(audio2, imgRed);

    ///----------------------------BLUE TERZA
    var audio3 = new Audio();
    audio3.src = "sound/Laudate-Dominum-Terza.mp3";
    audio3.play();
    startAudioAnalysis(audio3, imgBlue);
  }, 2000);

  // RED BASSU
  setTimeout(() => {
    imgRed.classList.add("animImgRed");
  }, 3200);

  // BLUE TERZA
  setTimeout(() => {
    imgBlue.classList.add("animImgBlue");
    imgPaghjella.classList.add("animPaghjella");
    circleWhite.classList.add("animCircleWhitePaghjella");
  }, 8200);
});
