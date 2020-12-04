class Umbrella{
    constructor(x,y)   {
        var options = {
            isStatic: true,
            restitution: 0,
            density: 1.2,
            friction: 0.5,
        }
        this.body = Bodies.circle(x,y,25,options);

        this.image=loadImage("walking_1.png")
        World.add(world,this.body);

    }

        display()   {
            push();
            var pos = this.body.position;
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image,550,450,0,0)
            pop();
        }
}
  