var canvas=new fabric.Canvas("my_canvas");

block_img_width=30;
block_img_height=30;

player_x=10;
player_y=10;

player_object=" ";

function playerUpdate(){
    fabric.Image.fromURL("player.png",function(img){
        player_object=img;
        player_object.scaleToWidth(50);
        player_object.scaleToHeight(50);
        player_object.set({top:player_y,left:player_x});
        canvas.add(player_object);
    });
}
function newImage(getImg){
    fabric.Image.fromURL(getImg,function(img){
        block_object=img;
        block_object.scaleToWidth(block_img_width);
        block_object.scaleToHeight(block_img_height);
        block_object.set({top:player_y,left:player_x});
        canvas.add(block_object);
    });
}
