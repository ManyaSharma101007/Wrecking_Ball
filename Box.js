class Box {
  constructor(x, y, width, height) {
    var options={
      restitution : 0.5,
      density : 1.2,
      friction : 1
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
  }
  display() {
   var r1 = this.body.position
    push()
    translate(r1.x,r1.y)
    rotate(this.body.angle)
    rectMode(CENTER)
    rect(0,0,this.width,this.height)
    pop()
  }
}
