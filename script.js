// RED
var tab_ball_r = []; // tableau qui crer les balles dégradés + position
var tab_anime_r = []; // tableau qui va contenir les ball a animer
var ballCount_r = 50; // nombre de balles
let animatingRed = true;

// GREEN
var tab_ball_g = []; // tableau qui crer les balles dégradés + position
var tab_anime_g = []; // tableau qui va contenir les ball a animer
var ballCount_g = 50; // nombre de balles
let animatingGreen = false;

// BLUE
var tab_ball_b = []; // tableau qui crer les balles dégradés + position
var tab_anime_b = []; // tableau qui va contenir les ball a animer
var ballCount_b = 50; // nombre de balles
let animatingBlue = false;

const width_ball = 80; // largeur de la balle
// !! A FAIRE augmenter la taille de width_ball quand on est sur mobile et l'espacement des cercles
var delay_anim = 1; // the number of frames to wait before adding a new ball (60 frames = 1 second)

// function mouseClicked() {
//   // Vérifier si le clic a eu lieu sur la balle blanche
//   const distance = dist(mouseX, mouseY, ballWithe.x, ballWithe.y);
//   if (distance < ballWithe.r) {
//     console.log("Clic sur la balle blanche détecté");
//   }
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(color(0, 0, 0, 0));
  // RED
  for (let i = 0; i <= ballCount_r; i++) {
    tab_ball_r[i] = new Ball(
      windowWidth / 2 + width_ball / 2 + i * -10,
      windowHeight / 1.5 - i * 6.473 + i * 10,
      width_ball,
      255 - i * (255 / ballCount_r),
      0,
      0,
      1
    );
  }

  // GREEN
  for (let i = 0; i <= ballCount_g; i++) {
    tab_ball_g[i] = new Ball(
      windowWidth / 2 + width_ball / 2,
      windowHeight / 1.5 - i * 6.473,
      width_ball,
      0,
      255 - i * (255 / ballCount_g),
      0,
      1
    );
  }

  // BLUE
  for (let i = 0; i <= ballCount_b; i++) {
    tab_ball_b[i] = new Ball(
      windowWidth / 2 + width_ball / 2 + i * 10,
      windowHeight / 1.5 - i * 6.473 + i * 10,
      width_ball,
      0,
      0,
      255 - i * (255 / ballCount_b),
      1
    );
  }
}
function draw() {
  background(color(0, 0, 0, 0));
  const ballWithe = new Ball(
    windowWidth / 2 + width_ball / 2,
    windowHeight / 1.5,
    width_ball,
    255,
    255,
    255,
    1
  );
  if (frameCount % delay_anim == 0) {
    if (animatingRed) {
      // RED
      tab_anime_r.push(tab_ball_r[ballCount_r]);
      tab_anime_r.forEach((ball) => {
        ball.show();
      });
      ballCount_r--;

      if (ballCount_r == 0) {
        animatingRed = false;
        animatingBlue = true;
      }
    } else if (animatingBlue) {
      // BLUE
      tab_anime_b.push(tab_ball_b[ballCount_b]);
      tab_anime_b.forEach((ball) => {
        ball.show();
      });
      ballCount_b--;

      if (ballCount_b == 0) {
        animatingBlue = false;
        animatingGreen = true;
      }
    } else if (animatingGreen) {
      // GREEN
      tab_anime_g.push(tab_ball_g[ballCount_g]);
      tab_anime_g.forEach((ball) => {
        ball.show();
      });
      ballCount_g--;

      if (ballCount_g == 0) {
        animatingGreen = false;
        noLoop();
      }
    }
  }
  // dessiner les balles qui sont dans les tableaux tab_anime_r et tab_anime_b même après la fin de l'animation
  tab_anime_r.forEach((ball) => {
    ball.show();
  });

  tab_anime_b.forEach((ball) => {
    ball.show();
  });
  ballWithe.show();

  // stopper l'animation lorsque toutes les balles ont été dessinées
  if (ballCount_r == 0 && ballCount_g == 0 && ballCount_b == 0) {
    noLoop(); // stop the animation
  }
}

class Ball {
  constructor(pos_x, pos_y, d, r, g, b, a) {
    this.red = r;
    this.green = g;
    this.blue = b;
    this.alpha = a;
    this.x = pos_x;
    this.y = pos_y;
    this.r = d / 2;
  }
  show() {
    noStroke();
    fill(this.red, this.green, this.blue);
    circle(this.x - this.r, this.y - this.r, this.r * 2);
  }
}
