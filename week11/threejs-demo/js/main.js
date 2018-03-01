var app = app || {};

app.step = 0;
app.cameraPosIndex = 0;

app.controller = {
  rotationSpeed: 0.02,
  bouncingSpeed: 0.02
};

app.init = function(){
  console.log('hello 3D w0rld');

  // keeps track of objects we're rendering, including their positions, lighting, camera etc
  app.scene = new THREE.Scene();

  app.width = window.innerWidth;
  app.height = window.innerHeight;

  // Defines what the browser is looking at in the scene, i.e. the perspective
  // 4 argmuents:
  // Field of View
  // Screen ratio
  // How close to render things (near field)
  // How far to render things (far field)
  app.camera = new THREE.PerspectiveCamera(60, app.width/app.height, 0.1, 1000);

  // Position our camera in the 3D scene
  app.camera.position.x = -30;
  app.camera.position.y = 40;
  app.camera.position.z = 30;
  // Tell the camera what to look at, in this case the center of the scene: (0, 0, 0)
  app.camera.lookAt( app.scene.position );


  // Calculates how the browser will display the objects in a scene, based on the
  // camera position/angle and lighting. It also defines which rendering engine to use:
  // WebGL hardware acceleration if possible, otherwise falling back to a slower software
  // renderer for older computers (backwards compatible!)
  app.renderer = new THREE.WebGLRenderer();
  app.renderer.setSize( app.width, app.height ); // Set the size of the rendered canvas (full screen for us)
  // app.renderer.setClearColor( 0x000000 ); // background colour
  app.renderer.shadowMap.enabled = true;  // shadows are computationally expensive, so disabled by default
  app.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  app.controls = new THREE.OrbitControls( app.camera, app.renderer.domElement );

  app.gui = new dat.GUI();
  app.gui.add( app.controller, 'rotationSpeed', 0, 0.2 );
  app.gui.add( app.controller, 'bouncingSpeed', 0, 2 );

  // Put the renderer-created canvas element into our HTML DOM
  document.getElementById('output').appendChild( app.renderer.domElement );

  // Add a helper which shows the X,Y,Z axes of our scene
  app.axes = new THREE.AxesHelper( 40 );
  app.scene.add( app.axes );

  app.spotlight = app.createSpotlight();
  app.scene.add( app.spotlight );

  app.plane = app.createPlane();
  app.scene.add( app.plane );

  app.cube = app.createCube();
  app.scene.add( app.cube );

  app.sphere = app.createSphere();
  app.scene.add( app.sphere );

  app.spline = app.createSpline( 10 );
  app.line = app.createLineFromSpline( app.spline );
  app.scene.add( app.line );


  // Actually render the scene as viewed by the camera position
  // app.renderer.render( app.scene, app.camera );
  app.animate();

};

window.onload = app.init;
