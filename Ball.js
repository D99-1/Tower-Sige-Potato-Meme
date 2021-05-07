class Ball {
    constructor(x, y, width, height) {
      var options = {
          frictionAir:0.005,
          density:1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("polyg.png")
      World.add(world, this.body);
    }
    
    display(){
      if(this.body.speed < 3){
        super.display();
       }
       else{
         World.remove(world, this.body);
         push();
         this.Visiblity = this.Visiblity - 5;
         tint(255,this.Visiblity);
         image(this.image, this.body.position.x, this.body.position.y, 50, 50);
         pop();
       }
      
     
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      fill("grey");
      image(this.image,0, 0, this.width, this.height);
      pop();
}
  ;
}