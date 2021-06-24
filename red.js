class Red {


    constructor(x,y,w,h)
    {
    this.body=Bodies.rectangle(x,y,w,h, {isStatic: true, restitution: 0.8 })
    this.width = w
    this.height = h

    World.add(engine.world, this.body)
    
    }
    
    display()
    {
    fill("red")
    rect(this.body.position.x, this.body.position.y, this.width, this.height)
    rectMode(CENTER)
    
    }
    
    
    }