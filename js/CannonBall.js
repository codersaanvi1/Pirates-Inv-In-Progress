class cannonBall {

   
    constructor(x,y,r) {


        var opt = {
            restitution : 0.8,
            isStatic : true,
            density : 1,
            friction : 1,
    
        }

        this.body = Bodies.circle(x,y,r,opt)
        this.r = r
        this.image = loadImage("assets/cannonball.png")
        World.add(world,this.body)


    }

    display() {
        var angle = this.body.angle 
        var pos = this.body.position
        push();
        translate (pos.x,pos.y)
        rotate(angle) 
        imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop();

        
    }


    shoot() {
        var velocity = p5.Vector.fromAngle(cannon.angle)
        velocity.mult(20)
        Matter.Body.setStatic(this.body,false)
        Matter.Body.setVelocity(this.body,{x:50,y:-30}) 
    }


}

