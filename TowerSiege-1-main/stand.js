class stand{
constructor(x,y,w,h){
var options = {
isStatic:true



}
this.x = x
this.y = y
this.w = w
this.h = h
this.body = Bodies.rectangle(x,y,w,h,options);
World.add (world,this.body);


}

display (){
    var stand_pos = this.body.position;
    push();
    translate(stand_pos.x,stand_pos.y);
    recMode(CENTER);
    fill("brown");
    rec(0,0,this.w,this.h);
    pop();
    
     }


}
