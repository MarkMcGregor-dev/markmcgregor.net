AFRAME.registerComponent('portfolio-body', {
  init: function() {
    const self = this;
    const el = self.el;

    var body = document.createElement('div');
    body.classList.add('portfolio-body');

    el.appendChild(body);

    // add an event listener for updating the UI
    el.addEventListener('updateUI', (event) => {
      self.updateUI(event.detail.project);
    });
  },

  updateUI: function(project) {

  }
});
