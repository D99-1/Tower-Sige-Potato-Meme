class Rope {
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            

        }
this.pointB = pointB
this.rope = Constraint.create(options)
World.add(world,this.rope)
    }
attach(body){
    this.rope.bodyA = body
}
fly(){
    this.rope.bodyA = null

}
display(){
    if(this.rope.bodyA){
        var pointA = this.rope.bodyA.position
        var pointB = this.pointB
        push()
        stroke("grey")
        strokeWeight(3)
        line(pointB.x,pointB.y,pointA.x,pointA.y)
        pop()
    }
}
}