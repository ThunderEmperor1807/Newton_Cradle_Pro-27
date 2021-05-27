class slag{
    constructor(bodyA, bodyB,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            //pointB:{x:this.offsetX,y:this.offsetY},
           
        }
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }

    
    
    display(){
        var bA = this.Sling.bodyA.position;
        var bB = this.Sling.bodyB.position;
        // var posX=this.pointB.x
        // var posY=this.pointB.y
        strokeWeight(4);
        stroke("silver")
        line(bA.x,bA.y,bB.x+this.offsetX,bB.y+this.offsetY);
    }
}
