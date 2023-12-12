// Crea la variable de referncia del lienzo usando fabric.Canvas()
var canvas = new fabric.Canvas('myCanvas');

//Define el ancho inicial y el alto del cloque de imágenes 
block_image_width = 30;
block_image_height = 30;
//Define el inicio de las coordenadas  y Y del jugador 
player_x = 10;
player_y = 10;
// Define una variable llamada player_object para almacenar la imagen del jugador
var player_object = "";

// Agrega una función llamada player_update() para agregar la imagen del jugador 
function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;
        

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);


        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

// Agrega una función llamada new_image() para agregar las diferentes imágene al presionar teclas específicas.
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;


        block_image_object.scaleToWidth(block_image_width);
        block_image_height.scaleToHeight(block_image_height);

        
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", mi_TeclaPulsada);

function mi_TeclaPulsada(e)
{
    keyPressed = e.keyCode;

    if (e.shiftKey ==true && keyPressed == '80')

    {
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        

        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
}

if (e.shiftKey && keyPressed == '77')

{
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height - 10;
    

    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
}

if(keyPressed == '38')
{
    arriba();
}

if (keyPressed == '40')
{
    abajo();
}

if (keyPressed == '37')
{
    izquierda();
}

if (keyPressed == '39')
{
    derecha();
}

if (keyPressed == '87')
{
    new_image("wall.jpg");
    console.log("W");
}

if (keyPressed == '71')
{
    new_image("ground.png");
    console.log("G");
}

if (keyPressed == '76')
{
    new_image("light_green.png");
    console.log("L");
}

if (keyPressed == '84')
{
    new_image("trunk.jpg");
    console.log("T");
}

if (keyPressed == '82')
{
    new_image("roof.jpg");
    console.log("R");
}

if (keyPressed == '68')
{
    new_image("dark_green.png");
    console.log("D");

}

if (keyPressed == '89')
{
    new_image("yellow_wall.png");
    console.log("Y");
}

if (keyPressed == '85')
{
    new_image("unique.png");
    console.log("U");

}

if (keyPressed == '67')
{
    new_image("cloud.jpg");
    console.log("C");

}
}

function arriba()
{
    if (player_y >= 0)
    {
        player_y = player_y - block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function abajo()
{
    if(player_y <=500)
    {
        player_y = player_y + block_image_height;
        canvas.remove(player_object);
    player_update();
    }
}

function derecha()
{
    if(player_x <=850)
    {
        player_x = player_x + block_image_height;
        canvas.remove(player_object);
    player_update();
    }
}

function izquierda()
{
    if(player_x >= 0)
    {
        player_x = player_x - block_image_height;
        canvas.remove(player_object);
    player_update();
    }
}