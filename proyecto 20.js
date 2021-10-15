var canvas,bg;
var together;
var tom, tomImg1,tomImg2;
var jerry, jerryImg1,jerryImg2;

function preload() {
    //carga aquí las imágenes
    bg = loadImage("imagenes/garden.png");
    tomImg1 = loadAnimation("imagenes/tomFour.png");
    jerryImg1 = loadAnimation("imagenes/jerryOne.png");
    tomImg2 = loadAnimation("imagenes/tomThree.png","imagenes/tomTwo.png");
    jerryImg2 = loadAnimation("imagenes/jerryTwo.png", "imagenes/jerryThree.png");

}

function setup(){
    canvas = createCanvas(1000,800);
    //crea aquí los sprites de Tom y Jerry
    tom = createSprite(870, 600);
    tom.addAnimation("tomSentado", catImg1);
    tom.Scale = 0.2;

    jerry = createSprite(170, 600);
    jerry.addAnimation("jerryFeliz",jerryImg1);
    jerry.Scale = 0.1;


}

function draw() {

    //background(bg);
    background(bg);
    //Escribe aquí la condición para evaluar si Tom y Jerry chocan

    if(tom.x - jerry.x < (tom.width - jerry.width)/2){
        tom.velocity=0;
        tom.addAnimation("UltimaImagenTom", tomImg1);
        tom.changeAnimation("ultimaImagenTom")
        tom.x=300;
        tom.scale=0.2;
    }



    drawSprites();
}


function keyPressed(){

//Escribe aquí el código para la animación de movimeinto y cambio

    if(keyCode === LEFT_ARROW){
        jerry.addAnimation("jerryMolestando", jerryImg2);
        jerry.changeAnimation("jerryMolestando")
        jerry.frameDelay = 25;


        tom.velocity = -5
        
        tom.addAnimation.addAnimation("tomCorriendo", tomImg2);
        tom.changeAnimation("tomCorriendo");
        tom.frameDelay = 25;


    }



}