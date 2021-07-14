
// Creates an invisible volume that can be clicked to center the camera in front of it
AFRAME.registerComponent('camera-switch-volume', {
  schema: {
    debug: {type: 'boolean', default: false}
  },
  init: function() {
    var self = this;
    var el = this.el;

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
    el.setAttribute('event-set__mouseenter', {_event: 'click'});
    el.addEventListener('click', function (evt) {
      console.log('CLICKED!');
    });
  }
});
