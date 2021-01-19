import * as THREE from 'https://unpkg.com/three/build/three.module.js';

// create the scene
const scene = new THREE.Scene();

// create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth /
  window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const wireframe = new THREE.WireframeGeometry(geometry);
const line = new THREE.LineSegments(wireframe);

scene.add(line);

camera.position.z = 5;

const loop = function() {
  requestAnimationFrame(loop);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  // animate the cube
  line.rotation.x += 0.01;
  line.rotation.y += 0.01;

  // decrease cube size if neccessary
  if (line.scale.x > 1) {
    line.scale.x -= 0.1;
    line.scale.y -= 0.1;
    line.scale.z -= 0.1;
  }

  renderer.render(scene, camera);
}

const onPressDown = function() {
  console.log("Press!");
  line.scale.x = 2;
  line.scale.y = 2;
  line.scale.z = 2;
}

document.addEventListener( 'mousedown', onPressDown, false);
loop();
