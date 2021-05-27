class roof{
    constructor(){
        var options={
            "isStatic":true
        }

        this.body=Bodies.rectangle(400,100,400,20,options);
        this.width=400
        this.height=20

        World.add(world,this.body)

    }

    display(){
        var position=this.body.position
        var angle=this.body.angle
        push()
        translate(position.x,position.y)
        rotate(angle)
        rectMode(CENTER)
        fill(255)
        strokeWeight(4)
        stroke("red")
        rect(0,0,this.width,this.height)
        pop()
        
    }
}