class Ball {
    constructor(x,y,r) {
        var options={
            restitution : 1,
            density : 1.2,
            friction : 1
        }

        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }
    display() {
        var pt1 = this.body.position
        push()
        translate(pt1.x,pt1.y)
        rotate(this.body.angle)
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r)
        pop() 
    }
}