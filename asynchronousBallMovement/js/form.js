class Form{
constructor(){
this.input = createInput("name");
this.button = createButton('START...');
this.title = createElement('h5')
this.greeting = createElement('h2');
}
hide(){
 this.input.hide();
this.button.hide();
this.title.hide();
this.greeting.hide();
}
display(){

this.title.html("OH GOD NO PLE---,its just a car game nothing else OK")
this.title.position(displayWidth/2 - 80,0);




this.input.position(displayWidth/2 - 70,displayHeight/2 - 40);
this.button.position(displayWidth/2 - 140,displayHeight/2 - 40);
this.button.mousePressed(()=>{
this.input.hide();
this.button.hide();
player.name = this.input.value();
playerCount += 1 ;
player.index = playerCount;
player.update();

player.updateCount(playerCount)
 
this.greeting.html("STOP H--,on nothing ok,nothing"+player.name)
this.greeting.position(displayWidth/2 - 140,displayHeight/2 - 40);
})


}



}