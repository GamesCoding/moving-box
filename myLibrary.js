function collide(sprite1,sprite2){
    if(sprite1.x - sprite2.x < sprite1.width/2 + sprite2.width/2
        && sprite2.x - sprite1.x < sprite1.width/2 + sprite2.width/2
        && sprite1.y - sprite2.y < sprite1.height/2 + sprite2.height/2
        && sprite2.y - sprite1.y < sprite1.height/2 + sprite2.height/2){
            return true;
        }
        else{
            return false;
        }
}