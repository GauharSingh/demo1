let scene, camera, render;
var renderer;
const canvas = document.querySelector("#c");

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

  hlight = new THREE.AmbientLight(0x404040, 100);
  scene.add(hlight);

  directionalLight = new THREE.DirectionalLight(0xffffff, 100);
  directionalLight.position.set(0, 1, 0);
  directionalLight.castShadow = true;
  scene.add(directionalLight);

  light = new THREE.PointLight(0xc4c4cc4, 10);
  light.position.set(0, 300, 500);
  scene.add(light);

  light2 = new THREE.PointLight(0xc4c4cc4, 10);
  light.position.set(500, 100, 0);
  scene.add(light2);

  light3 = new THREE.PointLight(0xc4c4cc4, 10);
  light.position.set(0, 100, -500);
  scene.add(light3);

  light4 = new THREE.PointLight(0xc4c4cc4, 10);
  light.position.set(-5000, 300, 0);
  scene.add(light4);

  renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(1024, 768);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  // document.body.appendChild(renderer.domElement);

  let loader = new THREE.GLTFLoader();
  loader.load("../3d-obj-loader/assets/scene.gltf", function (gltf) {
    car = gltf.scene.children[0];
    car.scale.set(0.5, 0.5, 0.5);
    scene.add(gltf.scene);
    animate();
  });

  function render() {
    renderer.render(scene, camera);
  }
  // const elem = document.querySelector("#take-photo");
  // elem.addEventListener("click", () => {
  //   render();
  //   document.getElementById("c").toBlob((blob) => {
  //     const a = document.createElement("a");
  //     document.body.appendChild(a);
  //     a.style.display = "none";
  //     url = window.URL.createObjectURL(blob);
  //     a.href = url;
  //     a.download = `screencapture-${document.getElementById("c").width}x${
  //       document.getElementById("c").height
  //     }.png`;
  //     a.click();
  //   });
  // });
}

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}
init();
