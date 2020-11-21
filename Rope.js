class Rope{

    constructor(bodyA,bodyB,offsetX,offsetY){
        
        this.offsetX=offsetX;
        this.offsetY=offsetY;
         var options={
            
            
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
           
        
          }
          //chain is the name that we have given to join two bodies.
          this.rope=Constraint.create(options)
          World.add(world,this.rope)
    }
    
    
    
    
    display(){
    
    
    
        line(this.bodyA.position.x,this.bodyA.position.y,
            this.pointB.x,this.pointB.y);
    
    }
    
    
    
    
    
    
    
    
    }