class SlingShot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            pointB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB= bodyB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        console.log(this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if (this.sling.bodyA){
           var pointA = this.sling.bodyA.position;
           var pointB = this.sling.pointB;
           strokeWeight(4);
           line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}