const startup = () => {
  // listen for the scene to be loaded
  // sceneEl = document.querySelector("a-scene");
  // if (!sceneEl.hasLoaded) {
  //   sceneEl.addEventListener("loaded", startup);
  // }
  //
  // var camera = document.querySelector("#camera");
  // camera.emit("updateTarget");
};

const resetCamera = () => {
  // get the camera
  const camera = document.querySelector('<custom-camera>');
  camera.emit('resetTarget');
  console.log('resetting camera target');
}
