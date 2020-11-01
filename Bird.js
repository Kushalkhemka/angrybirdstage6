class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.arr=[];
    this.image1=loadImage("sprites/smoke.png");
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    console.log(this.body.velocity.x);
    if(this.body.position.x>220&& this.body.velocity.x>15)
    {
    this.arr.push([this.body.position.x,this.body.position.y]);
    }
    for(var p=0; p<=this.arr.length-1 ; p=p+1)
    {
      image(this.image1,this.arr[p][0],this.arr[p][1],10,10);
    }
   
  }
}
