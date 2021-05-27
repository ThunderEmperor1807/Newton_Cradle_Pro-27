const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint=Matter.Constraint

function setup(){
	createCanvas(800,800)

	engine=Engine.create()
	world=engine.world

	roof1=new roof()

	bob1=new bob(260,500)
	bob2=new bob(330,500)
	bob3=new bob(400,500)
	bob4=new bob(470,500)
	bob5=new bob(540,500)

	slag1=new slag(bob1.body,roof1.body,-140,10)
	slag2=new slag(bob2.body,roof1.body,-70,10)
	slag3=new slag(bob3.body,roof1.body,0,10)
	slag4=new slag(bob4.body,roof1.body,70,10)
	slag5=new slag(bob5.body,roof1.body,140,10)

}

function draw(){
	background(0)
	Engine.update(engine)

	roof1.display()
	bob1.display()
	bob2.display()
	bob3.display()
	bob4.display()
	bob5.display()

	slag1.display()
	slag2.display()
	slag3.display()
	slag4.display()
	slag5.display()

	
}

function keyPressed(){
	if (keyCode===38){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-1200,y:0})
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:1200,y:0})
	}
}
