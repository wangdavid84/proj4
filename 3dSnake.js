var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var material = new THREE.MeshLambertMaterial({
  color: 0xF3FFE2,
  map: new THREE.TextureLoader().load('https//swang41.github.io/simpleSnake/snake.jpg')
});

var material1 = new THREE.MeshLambertMaterial({
  color: 0xF3FFE2,
  map: new THREE.TextureLoader().load('https//swang41.github.io/simpleSnake/egg.jpg')
});

var material2 = new THREE.MeshLambertMaterial({
  color: 0xF3FFE2,
  map: new THREE.TextureLoader().load('https//swang41.github.io/simpleSnake/wall.jpg')
});

// create the shape
  var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  // create material, color or image Texture
  var cube = new THREE.Mesh ( geometry, material );
  scene.add(cube);
  camera.position.z = 3;


var render = function()
{
  renderer.render(scene, camera);
}
// create the shape
// var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var cubeMaterial = [
//   new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('egg.jpg'), side: THREE.DoubleSide } ),
//   new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('egg.jpg'), side: THREE.DoubleSide } ),
//   new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('egg.jpg'), side: THREE.DoubleSide } ),
//   new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('egg.jpg'), side: THREE.DoubleSide } ),
//   new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('egg.jpg'), side: THREE.DoubleSide } ),
//   new THREE.MeshBasicMaterial( { map: new THREE.TextureLoader().load('egg.jpg'), side: THREE.DoubleSide } ),
// ];
// var material = new THREE.MeshFaceMaterial( cubeMaterial );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );
//
// camera.position.z = 5;

// var animate = function () {
//   requestAnimationFrame( animate );
//
//   // cube.rotation.x += 0.01;
//   // cube.rotation.y += 0.01;
//
//   renderer.render( scene, camera );
// };

controls = new THREE.OrbitControls( camera, renderer.domElement );
// game logic
var update = function()
{
  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;
}

  camera.position.z = 3;
// run game loop (update, render repeat)
var GameLoop = function()
{
  requestAnimationFrame( GameLoop );

  update();
  render();
}

GameLoop();
