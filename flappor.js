class Flappor {
  constructor() {
    this.x = 100;
    this.y = 200;
    this.velocity = 0;
  }

  update() {
    const gravity = 0.2;
    this.velocity += gravity;
    if (this.velocity >= 5) {
      // Terminal velocity because yes.
      this.velocity = 5;
    }
      this.y += this.velocity;
  }

  show() {
    fill(255, 0, 0);
    circle(this.x, this.y, 30)
  }

  fly() {
    this.velocity -= 8;
    if (this.velocity <= -5){
      this.velocity = -5;
    }
    this.y -= this.velocity;
  }

}