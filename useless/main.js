var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
var renderer = new THREE.WebGLRenderer();
//document.body.appendChild(renderer.domElement);

//event fires when window resizes
window.addEventListener("resize", function () {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

//orbit around a target
var controls = new THREE.OrbitControls(camera, renderer.domElement);

var geometry = new THREE.BoxGeometry(2, 2, 2); //width,height,depth

//MeshBasicMaterial becoz not adding lightning to textures
var cubeMaterials = [
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("img/1.jpeg"),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("img/2.png"),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("img/3.png"),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("img/4.jpg"),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("img/5.png"),
    side: THREE.DoubleSide,
  }),
  new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("img/6.jfif"),
    side: THREE.DoubleSide,
  }),
];
var material = new THREE.MeshFaceMaterial(cubeMaterials);

//for simple cube object
// var material = new THREE.MeshBasicMaterial({
//   color: 0xffffff,
//   wireframe: true,
// });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3; //default is z value is -z axis

// var render = function (time) {
//   time *= 0.001; // convert time to seconds

//   cube.rotation.x = time;
//   cube.rotation.y = time;
//   //console.log(time);

//   renderer.render(scene, camera);

//   requestAnimationFrame(render);
// };
// requestAnimationFrame(render);

//previous approach
// setInterval(function () {
//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
//   renderer.render(scene, camera);
// }, 1000);
