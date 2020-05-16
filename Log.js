class Log extends BaseClass{
  constructor(x,y,height,width,angle){
    isStatic:true
    
    super(x,y,20,height,width,angle);
    //this.image = loadImage("sprites/wood2.png");
    
    Matter.Body.setAngle(this.body, angle);
  }
}
if(this.body.speed<5){
  super.display ()
 
 }
 else{
  World.remove (world,this.body)
 push();
 
  this.visibility=this.visibility-5
 tint(255,this.visibility)
 image(this.image,this.body.position.x,this.body.position.y,50,50)
 pop();
 }