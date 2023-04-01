// RED
var tab_ball_r = []; // tableau qui crer les balles dégradés + position
var tab_anime_r = []; // tableau qui va contenir les ball a animer
// GREEN
var tab_ball_g = []; // tableau qui crer les balles dégradés + position
var tab_anime_g = []; // tableau qui va contenir les ball a animer

// BLUE
var tab_ball_b = []; // tableau qui crer les balles dégradés + position
var tab_anime_b = []; // tableau qui va contenir les ball a animer

var ballCount = 50; // nombre de balles
const width_ball = 80; // largeur de la balle
var delay_anim = 1; // the number of frames to wait before adding a new ball (60 frames = 1 second)
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  // RED
  for (let i = 0; i <= ballCount; i++) {
    tab_ball_r[i] = new Ball(
      windowWidth / 2 + width_ball / 2 + i * -10,
      windowHeight / 1.5 - i * 6.473 + i * 10,
      width_ball,
      255 - i * (255 / ballCount),
      0,
      0,
      1
    );
  }

  // GREEN
  for (let i = 0; i <= ballCount; i++) {
    tab_ball_g[i] = new Ball(
      windowWidth / 2 + width_ball / 2,
      windowHeight / 1.5 - i * 6.473,
      width_ball,
      0,
      255 - i * (255 / ballCount),
      0,
      1
    );
  }

  // BLUE
  for (let i = 0; i <= ballCount; i++) {
    tab_ball_b[i] = new Ball(
      windowWidth / 2 + width_ball / 2 + i * 10,
      windowHeight / 1.5 - i * 6.473 + i * 10,
      width_ball,
      0,
      0,
      255 - i * (255 / ballCount),
      1
    );
  }
}
function draw() {
  background(0);
  if (frameCount % delay_anim == 0) {
    // RED
    print(frameCount, " dalay: ", delay_anim, " deltaTime: ", deltaTime);
    tab_ball_r[ballCount].show();
    tab_anime_r.push(tab_ball_r[ballCount]);
    tab_anime_r.forEach((ball) => {
      ball.show();
    });
    ballCount--;

    // GREEN
    tab_ball_g[ballCount].show();
    tab_anime_g.push(tab_ball_g[ballCount]);
    tab_anime_g.forEach((ball) => {
      ball.show();
    });

    // BLUE
    tab_ball_b[ballCount].show();
    tab_anime_b.push(tab_ball_b[ballCount]);
    tab_anime_b.forEach((ball) => {
      ball.show();
    });
  }
  if (ballCount == 0) {
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
