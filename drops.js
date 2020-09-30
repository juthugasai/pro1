class Drops {

    constructor(x, y,radius) {

        var options = {
            isStatic:false,
            restitution:0.3,
            //friction:0.1,
           // density:1.2


        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius= radius;
        World.add(world, this.body);

    }
        display() {
           
       stroke("blue");
         fill("blue");
         push();
         translate(this.body.position.x,this.body.position.y);
         ellipseMode(RADIUS);
         ellipse(0, 0, this.radius, this.radius);
        pop();            
            
        }
}
