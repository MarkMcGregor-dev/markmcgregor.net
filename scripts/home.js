const startup = () => {
  // listen for the scene to be loaded
  sceneEl = document.querySelector("a-scene");
  if (!sceneEl.hasLoaded) {
    sceneEl.addEventListener("loaded", startup);
  }

  var camera = document.querySelector("#camera");
  camera.emit("updateTarget");
};
