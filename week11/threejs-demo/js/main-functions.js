var app = app || {};

app.createPlane = function(){

  const planeGeometry = new THREE.PlaneGeometry( 120, 20 );
  const planeMaterial = new THREE.MeshLambertMaterial({ color: 0xCFD8DC });
  const plane = new THREE.Mesh( planeGeometry, planeMaterial );

  plane.rotation.x = -0.5 * Math.PI;   // don't ask, it's because of math
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 0;
  plane.receiveShadow = true;

  return plane;
};

app.createCube = function(){
  const cubeGeometry = new THREE.BoxGeometry( 60, 2, 2 );
  const cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xFF8F00,
    wireframe: false
  });
  const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
  cube.position.set( -4, 4, 3 );
  cube.castShadow = true;

  return cube;
};

app.createSphere = function(){
  const sphereGeometry = new THREE.SphereGeometry( 4, 30, 30);
  const sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x039BE5,
    wireframe: false
  });

  const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
  sphere.position.set( 20, 8, 2 );
  sphere.castShadow =  true;

  return sphere;
};


app.createSpotlight = function(){

  const spotlight = new THREE.SpotLight( 0xFFFFFF );
  spotlight.position.set( -10, 60, 10 );
  spotlight.castShadow = true;
  spotlight.shadow.mapSize.width = 2048;
  spotlight.shadow.mapSize.height = 2048;

  return spotlight;
};


app.createSpline = function( numLines ){
  const randomPoints = [];
  for( let i = 0; i < numLines; i++ ){
    randomPoints.push(new THREE.Vector3(
      Math.random() * 100 - 50,
      Math.random() * 100 - 50,
      Math.random() * 100 - 50
    ));
  }
  randomPoints.push( randomPoints[0] );  // close the spline into a loop

  return new THREE.CatmullRomCurve3( randomPoints );  // THREE.SplineCurve3

};


app.createLineFromSpline = function( spline ){
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xFF00F0 });
    const lineGeometry = new THREE.Geometry();
    const splinePoints = spline.getPoints(10000);

    for( let i = 0; i < splinePoints.length; i++ ){
      lineGeometry.vertices.push( splinePoints[i] );
    }

  return new THREE.Line( lineGeometry, lineMaterial );
};


app.animate = function(){

  app.cameraPosIndex++;
  if( app.cameraPosIndex > 10000){
    app.cameraPosIndex = 0;     // start again at the beginning
  }

  const camPos = app.spline.getPoint( app.cameraPosIndex / 3000 );
  const camRot = app.spline.getTangent( app.cameraPosIndex / 3000 );
  app.camera.position.set( camPos.x, camPos.y, camPos.z );
  app.camera.rotation.set( camRot.x, camRot.y, camRot.z );
  // app.camera.lookAt( app.spline.getPoint( (app.cameraPosIndex+1) / 3000) );
  app.camera.lookAt( app.scene.position );

  app.cube.rotation.x += app.controller.rotationSpeed;
  app.cube.rotation.y += app.controller.rotationSpeed;
  app.cube.rotation.z += app.controller.rotationSpeed;

  app.step += app.controller.bouncingSpeed; // increment step counter

  app.sphere.position.x = 20 + (10 * Math.cos(app.step));
  app.sphere.position.y =  4 + (10 * Math.abs(Math.sin(app.step)));

  app.renderer.render( app.scene, app.camera );

  requestAnimationFrame( app.animate );
};
