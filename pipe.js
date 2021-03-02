class Pipe {
  constructor(offset = 0){
    this.x = 600 + offset;
    this.y = 0;
    this.y2 = random(100, 300);
    this.y1 = 300 - this.y2;
  }
  
  update(){
    this.x += -2;
    if(this.x <= -60){
      this.x = 540;
      this.y2 = random(100, 300);
      this.y1 = 300 - this.y2;
    }
  }
  
  show(){
    fill(0, 255, 0);
    let y2 = random(0, 100);
    
    rect(this.x, this.y, 60, this.y2);
    rect(this.x, this.y + this.y2 + 150, 60, this.y1);
  }
}