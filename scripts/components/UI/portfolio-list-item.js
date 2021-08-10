import * as utils from '/scripts/utils.js';

AFRAME.registerComponent('portfolio-list-item', {
  schema: {
    projectName: {type: 'string'},
    thumbnailUrl: {type: 'string'}
  },

  init: function() {
    const self = this;
    const el = self.el;

    // Create the list element for this entity
    var li = document.createElement('li');
    li.classList.add('portfolio-list-item');

    // add the background
    if (utils.urlExists(self.data.thumbnailUrl)) {
      li.style.background = `url("${self.data.thumbnailUrl}")`;
    } else {
      // use the placeholder thumbnail if none is provided
      li.style.background =
        'url("./resources/home/images/Placeholder-thumbnail.png")';
    }
    li.style.backgroundSize = "cover";
    li.style.backgroundPosition = "center";
    // var img = document.createElement('img');
    // img.setAttribute('src', self.data.backgroundUrl.path);
    // img.setAttribute('alt', self.data.backgroundUrl.alt);

    // add the project name text
    var title = document.createElement('p')
    title.innerText = self.data.projectName;

    // append the elements to the root
    li.appendChild(title);
    // li.appendChild(img);
    el.appendChild(li);
  }
});
