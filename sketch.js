var canvas,harry,voldemort,bush1,bush2,bush3,bush4,fire1,fire2,ghost,ghost2,wall1,wall2,wall3,wall4,wall5,wall6;
var bg0,bg1,bg2,bg1img,bg2img,bg0img;
var harryimage,voldemortimage,bush1image,bush2image,bush3image,bush4image,fire1img,fire2img,ghostimg,ghost2img;
var wall1img,wall2img,wall3img,wall4img,wall5img,wall6img,backgroundimg;
var start,startimg;
var mazebackground,mazebgimg;
var gameState =0;

function preload(){
      bg0img=loadImage("../images/bg0.png");
      bg1img=loadImage("../images/bg1.jpg");
      bg2img=loadImage("../images/bg2.jpg");
      harryimage=loadImage("../images/harrypottergame.png");
      voldemortimage=loadImage("../images/voldemort.png");
      bushimage=loadImage("../images/bush.png");
      fireimg=loadImage("../images/fire.png");
      ghostimg=loadImage("../images/dementor.jpg");
      
      wallimg=loadImage("../images/wall3.jpg");
     
      startimg=loadImage("../images/start.png");
      mazebgimg=loadImage("../images/mazebg.jpg");
}

function setup(){
      createCanvas(windowWidth,windowHeight);

       //gamestate0
       startState();

       //gamestate1
     setMaze(); 
}

function draw(){
      background(0);
      
      if(gameState===0){
        bg0.visible = true;
        start.visible = true;
        startLevel();
      }

      if(gameState===1){
          bg1.visible=true;
          
       
          bush3.visible=true;
         
          fire1.visible=true;
          //fire2.visible=true;
          //ghost.visible=true;
          wall1.visible=true;
          wall2.visible=true;
          wall3.visible=true;
          wall4.visible=true;
          wall5.visible=true;
          harry.visible=true;
          wall6.visible=true; 

          playMaze();
         
      }
      drawSprites();
}


function startState(){

      bg0=createSprite(width/2,height/2-150,width,height);
      bg0.addImage(bg0img);
      bg0.scale=2;
      bg0.visible = false;

      start=createSprite(width/2,height/2+150,50,30);
      start.addImage(startimg);
      start.scale=0.5;
      start.visible = false;
      

}

function startLevel(){
    stroke("silver");
      strokeWeight(5);
      textSize(20);
      fill(255);
      text("Welcome to the Hogwarts World!\n Level 1: \n Use arrow keys to reach the final door..",width/2-150,height/2); 


      if(mousePressedOver(start)){
        clear();
        //game state changes to 1 
        gameState=1;

      }
}

function setMaze(){
    bg1=createSprite(width/2,height/2,width,height);
    bg1.addImage(mazebgimg);
    bg1.scale=3;
    bg1.visible=false;

    bush3=createSprite(width/2,90,100,150);
    bush3.addImage(bushimage);
    bush3.scale=0.4;
    bush3.visible=false;

    fire1=createSprite(width/2+400,height/1-100,100,200);
    fire1.addImage(fireimg);
    fire1.scale=0.8;
    fire1.visible=false;


    ghost=createSprite(width/2+300,200,100,100);
    ghost.addImage(ghostimg);
    ghost.visible=false;


    harry=createSprite(48,height/2+250,50,50);
    harry.addImage(harryimage);
    harry.scale=0.03;
    harry.visible=false;

   
    wall1=createSprite(width/6-60,height-100,100,30);
    wall1.addImage(wallimg);
    wall1.scale=0.5;
    wall1.visible=false;

    wall2=createSprite(width/5,height-500,150,20);
    wall2.addImage(wallimg);
    wall2.scale=0.5;
    wall2.visible=false;

    wall3=createSprite(width/6,height-200,150,100);
    wall3.addImage(wallimg);
    wall3.scale=0.5;
    wall3.visible=false;

    wall4=createSprite(width/2-500,height/2,100,50);
    wall4.addImage(wallimg);
    wall4.scale=0.5;
    wall4.visible=false;

    wall5=createSprite(width/2,height/2+200,200,50);
    wall5.addImage(wallimg);
    wall5.scale=0.8;
    wall5.visible=false;

    wall6=createSprite(width/2+500,height/3,300,50);
    wall6.addImage(wallimg);
    wall6.scale=1;
    wall6.visible=false;

    
    

 }

 function playMaze(){
      harry.x=48;
            harry.y=390;
            text("Level One Over , You Lost, Press retry button to try again.",width/2,height/2);
      
            //    if(harry.isTouching(bush1)||(bush2)||(bush3)||(bush4)||(fire1)||(fire2)||(wall1)||(wall2)||(wall3)||(wall4)||(wall5)||(wall6)){
            //       gameState===2;
            //    }

            if(keyDown("Leftarrow")){
                  harry.VelocityX=harry.VelocityX-10;
            }

            if(keyDown("Rightarrow")){
                  harry.VelocityX=harry.VelocityX+10;
            }

            if(keyDown("Downarrow")){
                  harry.VelocityY=harry.VelocityY+10;
            }
            
            if(keyDown("Uparrow")){
                  harry.VelocityY=harry.VelocityY-10;
            }
 }
      
      


  