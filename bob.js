class bob{
    constructor(x,y){
        var options={
            isStatic:false,
            density:6,
            restitution:1
        }

        this.body=Bodies.circle(x,y,35,options)
        this.radius=70

        World.add(world,this.body)
    }

    display(){
        var position=this.body.position
        var angle=this.body.angle
        push()
        translate(position.x,position.y)
        rotate(angle)
        fill(255)
        ellipse(0,0,this.radius)
        pop()
    }
}
