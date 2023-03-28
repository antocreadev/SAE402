var tab_ball_g = [];
var tab_anime_g = [];

var ballCount = 50; // a counter for the number of balls that have been added
var delay = 1; // the number of frames to wait before adding a new ball (60 frames = 1 second)
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  for (let i = 0; i <= ballCount; i++) {
    tab_ball_g[i] = new Ball(
      windowWidth / 2,
      windowHeight / 2 - i * 6.473,
      80,
      0,
      255 - i * 5.1,
      0,
      1
    );
  }
}
function draw() {
  background(0);
  if (frameCount % delay == 0) {
    tab_ball_g[ballCount].show();
    tab_anime_g.push(tab_ball_g[ballCount]);
    tab_anime_g.forEach((ball) => {
      ball.show();
    });
    ballCount--;
  }
  if (ballCount == 0) {
    noLoop();
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
