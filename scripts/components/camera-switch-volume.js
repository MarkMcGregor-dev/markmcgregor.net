
// Creates an invisible volume that can be clicked to center the camera in front of it
AFRAME.registerComponent('camera-switch-volume', {
  schema: {
    name: {type: 'string'},
    debug: {type: 'boolean', default: false},
    cameraDistance: {type: 'number', default: 1},
    active: {type: 'boolean', default: false}
  },
  init: function() {
    const self = this;
    const el = this.el;

    // setup mesh if debugging
    if (self.data.debug) {
      // create mesh
      var geo = document.createElement('a-entity');
      geo.setAttribute('class', 'debug-geometry');
      geo.setAttribute('geometry', {primitive: 'box'});
      geo.setAttribute('material', {color: 'white', wireframe: true});
      el.appendChild(geo);
    }

    // set up click event listeners
    el.addEventListener('click', function (evt) {
      // get the camera
      var cameraGroup = document.querySelector('#camera-group');
      var camera = cameraGroup.querySelector('a-camera');

      // move the camera to be in front of the switch volume
      camera.emit('switchTarget', {
        targetPosition: el.getAttribute('position'),
        targetRotation: el.getAttribute('rotation'),
        targetName: self.data.name,
        targetCameraDistance: self.data.cameraDistance});

      self.data.active = true;
    });
    el.addEventListener('disengage', function (evt) {
      self.data.active = false;
    });
  }
});
