var harry,voldemort,bush1,bush2,fire1,fire2,ghost,ghost2,wall1,wall2;
var bg0,bg1,bg2,bg1img,bg2img,bg0img;
var harryimage,voldemortimage,fireimg,fire2img,ghostimg,ghost2img;
var wallVimg,wallHimg,bushLimg,bushTimg;
var start,startimg;
var mazebackground,mazebgimg;
var doorimg;
var wallGroup,bushGroup;
var gameState =0;
var ghost1;
var edges;

function preload(){

      //gamestate0
      bg0img=loadImage("../images/bg0.png");
      startimg=loadImage("../images/start.png");

      //gameState1
      mazebgimg=loadImage("../images/mazebg.jpg");
      harryimage=loadImage("../images/harrypottergame.png");
      bushLimg=loadImage("../images/bushL.png");
      bushTimg=loadImage("../images/bushT.png");
      fireDownimg=loadImage("../images/fireDown.png");
      fireLeftimg=loadImage("../images/fireLeft.png");
      fireUpimg=loadImage("../images/fireUp.png");
      ghostimg=loadImage("../images/dementor.png");
      wallVimg=loadImage("../images/wallV.jpg");
      wallHimg=loadImage("../images/wallH.jpg");
      doorimg=loadImage("../images/door.png");

}

function setup(){
      createCanvas(windowWidth,windowHeight);

      edges = createEdgeSprites();

      setStartLevel();

      setMaze();  
}

function draw(){
      background(0);
      
      if(gameState===0){
            stroke("silver");
            strokeWeight(5);
            textSize(20);
            fill(255);
            text("Welcome to the Hogwarts World!\n Level 1: \n Use arrow keys to reach the final door..",width/2-150,height/2); 

            if(mousePressedOver(start)){
                  bg0.visible=false;
                  start.visible=false;
                  gameState=1;
              
            } 
      }  
      console.log(gameState);    

      if(gameState===1){
            playMaze();
      }
     if(gameState===2){
      setLevel2();
     }
      drawSprites();
}

function setStartLevel(){


      bg0=createSprite(width/2,height/2-150,width,height);
      bg0.addImage(bg0img);
      bg0.scale=2;

      start=createSprite(width/2,height/2+150,50,30);
      start.addImage(startimg);
      start.scale=0.5;

      stroke("silver");
      strokeWeight(5);
      textSize(20);
      fill(255);
      text("Welcome to the Hogwarts World!\n Level 1: \n Use arrow keys to reach the final door..",width/2-150,height/2); 

     
}

function setMaze(){

      wallGroup = new Group();
      bushGroup = new Group();
      fireGroup = new Group();
      ghostGroup = new Group();

      createBushes();
      createWalls();
      createGhosts();

      door = createSprite(width-50,height-70,100,150);
      door.addImage(doorimg);
      door.visible=false;
      door.scale=0.25;
      door.debug=true;

      harry=createSprite(100,560,50,50);
      harry.addImage(harryimage);
      harry.visible=false;
      harry.scale=0.03;
      harry.setCollider("rectangle",0,0,50,100);
      harry.debug=true;
   
      
          
}

function createBushes(){
 
      //bush1
      for(var b = height-350; b < height; b=b+50){
            bush = createSprite(width/6-60,b,100,25);
            bush.addImage(bushLimg);
            bush.scale=0.4;
            bushGroup.add(bush);
      }

      //bush2
      for(var b2 = height/5; b2 < height/2; b2=b2+30){
            bush2 = createSprite(width/4.25,b2,100,25);
            bush2.addImage(bushTimg);
            bush2.scale=0.3;
            bushGroup.add(bush2);
      }

      //bush3
       for(var b3 = width/3.5+50; b3 < width/2; b3=b3+30){
            bush3 = createSprite(b3,height/2.5+25,100,25);
            bush3.addImage(bushTimg);
            bush3.scale=0.3;
            bushGroup.add(bush3);
      }

      //bush4
       for(var b4 = 100; b4 < height/2; b4=b4+30){
            bush4 = createSprite(width/2+50,b4,100,25);
            bush4.addImage(bushTimg);
            bush4.scale=0.3;
            bushGroup.add(bush4);
      }

      //bush5
        for(var b5 = width/2+50; b5 < width/2+275; b5=b5+30){
            bush5 = createSprite(b5,height-200,100,25);
            bush5.addImage(bushTimg);
            bush5.scale=0.3;
            bushGroup.add(bush5);
      }

      //bush6
       for(var b6 = height-200; b6 < height; b6=b6+30){
            bush6 = createSprite(width/2+50,b6,100,25);
            bush6.addImage(bushTimg);
            bush6.scale=0.3;
            bushGroup.add(bush6);
      }

      //bush7
       for(var b7 = width-200; b7 < width; b7=b7+30){
            bush7 = createSprite(b7,175,100,25);
            bush7.addImage(bushTimg);
            bush7.scale=0.3;
            bushGroup.add(bush7);
      }

      //bush8
       for(var b8 = width/2+300; b8 < width-350; b8=b8+30){
            bush8 = createSprite(b8,100,100,25);
            bush8.addImage(bushTimg);
            bush8.scale=0.3;
            bushGroup.add(bush8);
      }

      //bush9
       for(var b9 = 200; b9 < height/2+100; b9=b9+30){
            bush9 = createSprite(width-100,b9,100,25);
            bush9.addImage(bushTimg);
            bush9.scale=0.3;
            bushGroup.add(bush9);
       }
       
       bushGroup.setVisibleEach(false);
}

function createWalls(){
      //wall1
      for(var w = 30; w < height/4; w=w+45){
            wall=createSprite(width/6-60,w,100,30);
            wall.addImage(wallVimg);
            wall.scale=0.4;
            wallGroup.add(wall);
      }

       //wall2
       for(var w2 = width/5.5; w2 < width/5; w2=w2+45){
            wall2=createSprite(w2,height/2,100,30);
            wall2.addImage(wallHimg);
            wall2.scale=0.4;
            wallGroup.add(wall2);
      }

      //wall3
      for(var w3 = width/3; w3 < width/2.5; w3=w3+45){
            wall3=createSprite(w3,100,100,30);
            wall3.addImage(wallHimg);
            wall3.scale=0.4;
            wallGroup.add(wall3);

      }

      //wall4
      for(var w4 = 30; w4 < height/4; w4=w4+45){
            wall4=createSprite(width/2.25-20,w4,100,30);
            wall4.addImage(wallVimg);
            wall4.scale=0.4;
            wallGroup.add(wall4);
      }

      //wall5
       for(var w5 = height/2+20; w5 < height-200; w5=w5+45){
            wall5=createSprite(width/2.5+20,w5,100,30);
            wall5.addImage(wallVimg);
            wall5.scale=0.4;
            wallGroup.add(wall5);
      }

       //wall6
       for(var w6 = width/4.25; w6 < width/2.5; w6=w6+45){
            wall6=createSprite(w6,height/2+130,100,30);
            wall6.addImage(wallHimg);
            wall6.scale=0.4;
            wallGroup.add(wall6);

      }

      //wall7
      for(var w7 = 150; w7 < height-200; w7=w7+45){
            wall7=createSprite(width/2+300,w7,100,30);
            wall7.addImage(wallVimg);
            wall7.scale=0.4;
            wallGroup.add(wall7);
      }

      //wall8
       for(var w8 = width/2+200; w8 < width/2+450; w8=w8+45){
            wall8=createSprite(w8,height/2-50,100,30);
            wall8.addImage(wallHimg);
            wall8.scale=0.4;
            wallGroup.add(wall8);
      }

      //wall9
      for(var w9 = width-250; w9 < width-100; w9=w9+45){
            wall9=createSprite(w9,height/2+125,100,30);
            wall9.addImage(wallHimg);
            wall9.scale=0.4;
            wallGroup.add(wall9);
      }

      //wall10
      for(var w10 = height-300; w10 < height-200; w10=w10+45){
            wall10=createSprite(width-280,w7,100,30);
            wall10.addImage(wallVimg);
            wall10.scale=0.4;
            wallGroup.add(wall10);
      }

      wallGroup.setVisibleEach(false);

}

function createFire(){

      if(frameCount % 30===0){
            fire1= createSprite(250,-50,20,20);
            fire1.addImage(fireDownimg);
            fire1.scale=0.15;
            fire1.velocityY=8;
            fire1.lifetime=40;
            fireGroup.add(fire1);

            fire2= createSprite(width/2+200,-50,20,20);
            fire2.addImage(fireDownimg);
            fire2.scale=0.15;
            fire2.velocityY=8;
            fire2.lifetime=40;
            fireGroup.add(fire2);

            fire3= createSprite(width,50,20,20);
            fire3.addImage(fireLeftimg);
            fire3.scale=0.15;
            fire3.velocityX=-8;
            fire3.lifetime=40;
            fireGroup.add(fire3);

            fire4= createSprite(width-375,height,20,20);
            fire4.addImage(fireUpimg);
            fire4.scale=0.15;
            fire4.velocityY=-8;
            fire4.lifetime=45;
            fireGroup.add(fire4);
      }

}

function createGhosts(){
      ghost1= createSprite(width/4,height-60,50,50);
      ghost1.addImage(ghostimg);
      ghost1.scale=0.25;
      ghost1.velocityX=11;
      ghost1.setCollider("rectangle",0,0,175,100);
      ghostGroup.add(ghost1);

      ghost2= createSprite(width/2-30,50,50,50);
      ghost2.addImage(ghostimg);
      ghost2.scale=0.3;
      ghost2.velocityY=5;
      ghost2.setCollider("rectangle",0,0,175,400);
      ghostGroup.add(ghost2);

      ghost3= createSprite(width-200,height/2+100,50,50);
      ghost3.addImage(ghostimg);
      ghost3.scale=0.15;
      ghost3.velocityY=7;
      ghost3.setCollider("rectangle",0,0,175,400);
      ghostGroup.add(ghost3);

      ghostGroup.setVisibleEach(false);
}

function playMaze(){

      imageMode(CENTER);
      image(mazebgimg,width/2,height/2,width,height);

      harry.visible=true;
      createFire();
      bushGroup.setVisibleEach(true);
      wallGroup.setVisibleEach(true);
      fireGroup.setVisibleEach(true);
      ghostGroup.setVisibleEach(true);
      door.visible=true;



      ghost2.bounceOff(edges[2]);
      ghost3.bounceOff(edges[3]);
      ghostGroup.bounceOff(bushGroup);
      ghostGroup.bounceOff(wallGroup);
      harry.collide(wallGroup);
      harry.collide(bushGroup);

      if(keyDown(UP_ARROW)){
            harry.y=harry.y-10;
      }
      if(keyDown(DOWN_ARROW)){
            harry.y=harry.y+10;
      }
      if(keyDown(LEFT_ARROW)){
            harry.x=harry.x-10;
      }   
      if(keyDown(RIGHT_ARROW)){
            harry.x=harry.x+10;
      } 
      if(harry.isTouching(fireGroup)||harry.isTouching(ghostGroup)){
            harry.x=100;
            harry.y=560;
            
      }  
      if(harry.isTouching(door)){
            gameState===2;
      }
      
     


}
function setLevel2(){
      harry.visible=false;
      bushGroup.visible=false;
      wallGroup.visible=false;
      ghostGroup.visible=false;
      fireGroup.visible=false;
      door.visible=false;
      bg0.visible=false;
      text("Level 2 : You have reached the quidditch Stadium at Hogwarts, pick your hogwarts house, your character and your role as a quidditch player,", width/2,height/2);
      // bg2.visible=true;
}
  