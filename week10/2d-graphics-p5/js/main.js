var circles = [];
var velocityScale = 0.5;

var setup = function(){
  console.log('p5 is working');

  createCanvas(windowWidth, windowHeight); // window.innerWidth, window.innerHeight

  colorMode(HSB, 255);

  background(0);
  stroke(255);

  noStroke();
  // noFill();

  // fill(255, 0, 0);

  // line(
  //   200, 200,    // x,y of line starting point
  //   windowWidth, windowHeight   // x,y of line end point
  // );

  // ellipse(300, 300, 100, 100);

};

var draw = function(){


  if( !keyIsDown(ALT) ){
    background(0);
  }

  const mouseXVelocity = mouseX - pwinMouseX;
  const mouseYVelocity = mouseY - pwinMouseY;

  if( mouseIsPressed || keyIsDown(SHIFT) ){

    // const hue = map(mouseX, 0, windowWidth, 0, 255);

    const circle = {
      x: mouseX,
      y: mouseY,
      sizeX: mouseXVelocity,
      sizeY: mouseYVelocity,
      velX: random(-10, 10), //mouseXVelocity,
      velY: random(-10, 10), //mouseYVelocity, //random(-10, 10), //
      hue: frameCount % 255
    };

    // console.log(circle.velX);


    circles.push( circle );

    // debugger;

    // fill(hue, 255, 255);

    // fill(frameCount % 255, 255, 255);
    // fill(255, 0, 0);

    // let size = random(10, 60);
    // let size = mouseXVelocity * 3;
    // let size = 100;

    // const x  = windowWidth/2   +  Math.cos(frameCount/10) * 200
    // const y  = windowHeight/2  +  Math.sin(frameCount/10) * 200;

    // ellipse(
    //   // mouseX, mouseY,
    //   x, y,
    //   size, size
    // );

  } // mousePressed/SHIFT pressed check for drawing circles


  if( keyIsDown(CONTROL) ){
    velocityScale = map(mouseY, 0, windowHeight, -2, 2);
  }


  for( let i = 0; i < circles.length; i++ ){
    const c = circles[i];

    c.x += c.velX * velocityScale;
    c.y += c.velY * velocityScale;

    if( c.x > windowWidth || c.x < 0 ){
      c.velX *= -1;
    }

    if( c.y > windowHeight || c.y < 0 ){
      c.velY *= -1;
    }

    c.hue = (c.hue + frameCount/1000) % 255;

    // Velocity-based hue
    // const hue = map( c.velX, -10, 10, 0, 255);

    const size = Math.sqrt( c.sizeX*c.sizeX  + c.sizeY*c.sizeY ); // Pythagoras yo

    fill( c.hue, 255, 255 );
    ellipse( c.x, c.y, size, size );


  }


  // triangle(
  //   mouseX, mouseY,             // top
  //   mouseX - 60, mouseY + 100,  // bottom left
  //   mouseX + 60, mouseY + 100   // bottom right
  // );
  // triangle(
  //   random(windowWidth/2), random(windowHeight/2),
  //   random(windowWidth), random(windowHeight),
  //   random(windowWidth/2), random(windowHeight/2)
  // );
};
