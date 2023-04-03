window.addEventListener("load", function () {
  const circleWhite = document.querySelector("#circleWhite");

  const imgRed = document.querySelector("#imgRed");
  const imgGreen = document.querySelector("#imgGreen");
  const imgBlue = document.querySelector("#imgBlue");
  console.log(circleWhite);

  // AUDIO

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

      ///----------------------------RED BASSU
      var audio2 = new Audio();
      audio2.src = "sound/Laudate-Dominum-Terza.mp3"; // 8
      audio2.play();

      ///----------------------------BLUE TERZA
      var audio3 = new Audio();
      audio3.src = "sound/Laudate-Dominum-Bassu.mp3"; //3
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
});
