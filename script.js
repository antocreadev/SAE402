// RED
var tab_ball_r = []; // tableau qui crer les balles dégradés + position
var tab_anime_r = []; // tableau qui va contenir les ball a animer
var ballCount_r = 50; // nombre de balles

// GREEN
var tab_ball_g = []; // tableau qui crer les balles dégradés + position
var tab_anime_g = []; // tableau qui va contenir les ball a animer
var ballCount_g = 50; // nombre de balles

// BLUE
var tab_ball_b = []; // tableau qui crer les balles dégradés + position
var tab_anime_b = []; // tableau qui va contenir les ball a animer
var ballCount_b = 50; // nombre de balles

const width_ball = 80; // largeur de la balle
// !! A FAIRE augmenter la taille de width_ball quand on est sur mobile et l'espacement des cercles
var delay_anim = 1; // the number of frames to wait before adding a new ball (60 frames = 1 second)
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
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
  background(0);
  if (frameCount % delay_anim == 0) {
    // RED
    print(frameCount, " dalay: ", delay_anim, " deltaTime: ", deltaTime);
    tab_ball_r[ballCount_r].show();
    tab_anime_r.push(tab_ball_r[ballCount_r]);
    tab_anime_r.forEach((ball) => {
      ball.show();
    });
    ballCount_r--;

    // GREEN
    tab_ball_g[ballCount_g].show();
    tab_anime_g.push(tab_ball_g[ballCount_g]);
    tab_anime_g.forEach((ball) => {
      ball.show();
    });
    ballCount_g--;

    // BLUE
    tab_ball_b[ballCount_b].show();
    tab_anime_b.push(tab_ball_b[ballCount_b]);
    tab_anime_b.forEach((ball) => {
      ball.show();
    });
    ballCount_b--;
  }
  if (ballCount_r == 0 && ballCount_g == 0 && ballCount_b == 0) {
    const ball = new Ball(
      windowWidth /1.9,
      windowHeight / 1.5,
      width_ball,
      255,
      255,
      255,
      1
    );
    ball.show();
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