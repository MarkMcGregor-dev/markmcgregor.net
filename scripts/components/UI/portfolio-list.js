import * as data from '../../../data.js';

AFRAME.registerComponent('portfolio-list', {
  init: function() {
    const self = this;
    const el = self.el;

    var ul = document.createElement('ul');
    ul.classList.add('portfolio-list');

    // add each database item to the list
    for (var project of data.projects) {
      var li = document.createElement('a-entity');
      li.setAttribute('portfolio-list-item', {
        projectName: project.titleShort,
        thumbnailUrl: project.thumbnailPath
      });
      ul.appendChild(li);
    }


    el.appendChild(ul);
  }
});
