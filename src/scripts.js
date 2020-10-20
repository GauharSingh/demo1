import * as THREE from "three/build/three.module";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export var scene, camera, render;
export var renderer;
const canvas = document.querySelector("#c");

window.addEventListener("resize", function () {
  var width = window.innerWidth;
  var height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
});

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xdddddd);
  scene.background = null;

  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  camera.rotation.y = (45 / 180) * Math.PI;
  camera.position.x = 800;
  camera.position.y = 100;
  camera.position.z = 1000;

  let hlight = new THREE.AmbientLight(0x404040, 100);
  scene.add(hlight);

  let directionalLight = new THREE.DirectionalLight(0xffffff, 100);
  directionalLight.position.set(0, 1, 0);
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  let light = new THREE.PointLight(0xc4c4cc4, 10);
  light.position.set(0, 300, 500);
  scene.add(light);

  let light2 = new THREE.PointLight(0xc4c4cc4, 10);
  light.position.set(500, 100, 0);
  scene.add(light2);

  let light3 = new THREE.PointLight(0xc4c4cc4, 10);
  light.position.set(0, 100, -500);
  scene.add(light3);

  let light4 = new THREE.PointLight(0xc4c4cc4, 10);
  light.position.set(-5000, 300, 0);
  scene.add(light4);

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  var width = window.innerWidth; //1024; //640;
  var height = window.innerHeight; //768; //480;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);

  let controls = new OrbitControls(camera, renderer.domElement);
  // document.body.appendChild(renderer.domElement);

  let loader = new GLTFLoader();
  loader.load("../3d-obj-loader/assets/scene.gltf", function (gltf) {
    let car = gltf.scene.children[0];
    car.scale.set(0.5, 0.5, 0.5);
    scene.add(gltf.scene);
    animate();
  });

  function render() {
    renderer.render(scene, camera);
  }
}

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

init();
