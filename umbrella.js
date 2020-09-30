class Umbrella {

    constructor(x, y,radius) {

        var options = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2


        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius= radius;
        this.image=loadImage("yellow.jpg")
        World.add(world, this.body);

    }
        display() {
       
            //stroke("purple");
            fill("purple");
        push();
         translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius,this.radius);
        pop();            
           
        }
}

