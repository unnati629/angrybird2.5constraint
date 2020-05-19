class Chain{
    constructor(a, b){
     var options = {
         bodyA: a,
         bodyB: b,
         length: 10,
         stiffness:0.04
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);

    }
    display(){
        strokeWeight(2);
        var p = this.chain.bodyA.position;
        var q = this.chain.bodyB.position;

        line(p.x,p.y,q.x,q.y );
    }
    
}