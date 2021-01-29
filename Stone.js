class Stone {
    constructor(x,y) {
      var options = {
          isStatic: false,
          restitution: 0.5,
          density: 0.8
      }
      this.body = Bodies.circle(x,y,19,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("polygon.png")
      World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
    push();      
      translate(this.body.position.x,this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,44,44);
    pop();
    }
    
    move(){
        Matter.Body.setPosition(this.body,{x:mouseX,y:mouseY})
    }
  }