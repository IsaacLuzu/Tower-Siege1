class blocks{
constructor(x,y,w,h){
var options = {
isStatic:false,
density:1.2,
friction: 1,
restitution:0

};
this.x = x
this.y = y
this.w = w
this.h = h
this.body = Bodies.rectangle(x,y,w,h,options);
World.add (world,this.body);

}
display (){
    var block_pos = this.body.position;
    push();
    translate(block_pos.x,block_pos.y);
    recMode(CENTER);
    fill("brown");
    rec(0,0,this.w,this.h);
    pop();
    
     }


}