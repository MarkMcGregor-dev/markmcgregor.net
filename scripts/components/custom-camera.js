import * as utils from "../utils.js";

AFRAME.registerComponent('custom-camera', {
  schema: {
    baseRotation: {type: 'vec3'}
  },

  init: function () {
    const self = this;

    // update the parent's rotation
    self.el.parentElement.setAttribute('rotation', self.data.baseRotation);

    // add an event listener to the body for mouse movement
    document.body.addEventListener("mousemove", (event) => {
      self.mouseX = event.pageX;
      self.mouseY = event.pageY;
    }, false);
  },

  tick: function () {
    // Create local variables for mouse position
    let mouseX = this.mouseX != undefined
      ? this.mouseX / window.innerWidth
      : 0.5;
    let mouseY = this.mouseY != undefined
      ? this.mouseY / window.innerHeight
      : 0.5;

    let baseRotX = this.data.baseRotation.x;
    let baseRotY = this.data.baseRotation.y;

    const rotationConst = 10;
    let desiredRotationXRaw = utils.lerp(baseRotX + rotationConst,
      baseRotX - rotationConst, mouseY);
    let desiredRotationYRaw = utils.lerp(baseRotY + rotationConst,
      baseRotY - rotationConst, mouseX);

    // Adjust the camera according to the mouse position
    this.el.parentElement.setAttribute("rotation", {
      x: desiredRotationXRaw,
      y: desiredRotationYRaw,
      z: 0});
  },
});
