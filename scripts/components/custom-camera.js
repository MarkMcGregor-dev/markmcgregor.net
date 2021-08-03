import * as utils from "../utils.js";

AFRAME.registerComponent('custom-camera', {
  schema: {
    baseRotation: {type: 'vec3'},
    activeRotation: {type: 'vec3'}
  },

  init: function () {
    const self = this;
    const el = this.el;

    // set the initial rotation
    self.data.activeRotation = self.data.baseRotation;

    // set can switch target
    self.canSwitchTarget = true;

    // update the parent's rotation
    el.parentElement.setAttribute('rotation', self.data.baseRotation);

    // set the starting location of the camera
    el.setAttribute('position', '0 5 30');

    // add an event listener to the body for mouse movement
    document.body.addEventListener("mousemove", (event) => {
      self.mouseX = event.pageX;
      self.mouseY = event.pageY;
    }, false);

    // add an event listener for switching camera targets
    el.addEventListener('switchTarget', (event) => {
      // first ensure that the camera is not already locked into a target
      if (self.canSwitchTarget) {
        // move the camera to the target location and rotate to face it
        el.parentElement.setAttribute('position', event.detail.targetPosition);
        el.setAttribute('position', `0 0 ${event.detail.targetCameraDistance}`);
        el.parentElement.setAttribute('rotation', event.detail.targetRotation);
        self.data.activeRotation = event.detail.targetRotation;

        // disable switching targets until reset
        self.canSwitchTarget = false;
        console.log(`Switching camera to ${event.detail.targetName}`);
      }
    });
    el.addEventListener('resetTarget', () => {
      // move the camera to the base location and rotation
      el.setAttribute('position', '0 5 30');
      el.setAttribute('rotation', self.data.baseRotation);
      self.data.activeRotation = self.data.baseRotation;

      // enable switching targets
      self.canSwitchTarget = true;
    });
  },

  tick: function () {
    if (this.canSwitchTarget) {
      // Create local variables for mouse position
      let mouseX = this.mouseX != undefined
      ? this.mouseX / window.innerWidth
      : 0.5;
      let mouseY = this.mouseY != undefined
      ? this.mouseY / window.innerHeight
      : 0.5;

      let baseRotX = this.data.activeRotation.x;
      let baseRotY = this.data.activeRotation.y;

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
    }
  },
});
