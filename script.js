const circleWhite = document.querySelector("#circleWhite");

const imgRed = document.querySelector("#imgRed");
const imgGreen = document.querySelector("#imgGreen");
const imgBlue = document.querySelector("#imgBlue");
console.log(circleWhite);

circleWhite.addEventListener("click", () => {
  // add class
  circleWhite.classList.add("animCircleWhite");
  setTimeout(() => {
    imgRed.classList.add("animImgRed");
    imgGreen.classList.add("animImgGreen");
    imgBlue.classList.add("animImgBlue");
  }, 2000);
});
