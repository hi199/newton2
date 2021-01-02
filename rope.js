class chain{
    constructor(bodyA,bodyB,offsetX,offsetY) {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            body:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY,}
                }
                this.chain = Constraint.create(options)
                World.add(world,this.chain)
            }
        
      
    
    display(){
    strokeWeight(10);
    line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y)
     }
    }