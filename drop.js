class Drop{
    constructor(x,y)   {
        var options = {
           // isStatic: false,
            restitution: 0.3,
           // density: 1.2,
            friction: 0.01,
        }
        this.body=Bodies.circle(x,y,3,options);
        this.radius=3;
        World.add(world,this.body);

    }

        display(){
            var pos=this.body.position;
            var angle=this.body.angle;
            //var width=this.width;
            //var height=this.height;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            ellipseMode(RADIUS);
            fill("blue");
            ellipse(0,0,this.radius);
            pop();
        }

        update(){
            var pos=this.body.position;
            if(pos.y>620){
                Matter.Body.setPosition(this.body,{x:random(0,900),y:random(0,400)})
            }
        }
}
  