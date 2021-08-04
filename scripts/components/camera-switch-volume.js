import * as utils from '../utils.js';
import * as data from '../../data.json' assert{type: "json"};

// Creates an invisible volume that can be clicked to center the camera in
// front of it
AFRAME.registerComponent('camera-switch-volume', {
  schema: {
    name: {type: 'string'},
    debug: {type: 'boolean', default: false},
    cameraDistance: {type: 'number', default: 1},
    active: {type: 'boolean', default: false}
  },
  init: function() {
    console.log(data.default.projects);

    const self = this;
    const el = this.el;

    el.classList.add('clickable');

    // setup mesh if debugging
    if (self.data.debug) {
      // create mesh
      var geo = document.createElement('a-entity');
      geo.classList.add('debug-geometry');
      geo.setAttribute('geometry', {primitive: 'box'});
      geo.setAttribute('material', {color: 'white', wireframe: true});
      el.appendChild(geo);
    }

    // Check if this zone should be triggered at start
    if (utils.getParameters('t') == self.data.name) {
      // trigger the zone without any animations
      self.triggerZone(false, false);
    }

    // set up click event listeners
    el.addEventListener('click', function (evt) {
      // trigger the zone with animations
      self.triggerZone(true, true);
    });
    el.addEventListener('disengage', function (evt) {
      self.data.active = false;
    });
  },
  triggerZone: function(doAnimation, updateUrl) {
    const self = this;
    const el = this.el;

    // get the camera
    var cameraGroup = document.querySelector('#camera-group');
    var camera = cameraGroup.querySelector('a-camera');

    // move the camera to be in front of the switch volume
    camera.emit('switchTarget', {
      targetPosition: el.getAttribute('position'),
      targetRotation: el.getAttribute('rotation'),
      targetName: self.data.name,
      targetCameraDistance: self.data.cameraDistance,
      animate: doAnimation});

    self.data.active = true;

    // update the position parameter in the url
    if (updateUrl) {
      utils.setUrlParameter('t', self.data.name);
    }
  }
});
