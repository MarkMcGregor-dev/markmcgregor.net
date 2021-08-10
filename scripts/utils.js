export function lerp (a, b, t) {
  return (1 - t) * a + t * b;
};

export function getPosition (element) {
  return element.object3D.getWorldPosition(new THREE.Vector3()).clone();
};

export function getRotation (element) {
  return element.object3D.getWorldQuaternion(new THREE.Quaternion()).clone();
};

export function getRotationEuler (element) {
  return element.object3D.rotation.clone();
};

// Used to get a key value from the url
export function getParameters (key) {
  // var url = window.location.search.substring(1);
  // var urlVars = url.split('&');
  // for (var i = 0; i < urlVars; i++) {
  //   var value = urlVars[i].split('=');
  //   if (value[0] == key) {
  //     return value[1];
  //   }
  // }

  const url = new URL(window.location.href);
  return url.searchParams.get(key);
};

export function setUrlParameter(key, value) {
  let url = new URL(window.location.href);
  url.searchParams.set(key, value);
  window.history.pushState({path: url.href}, '', url.href);
};

export function urlExists(url) {
  if (url == undefined || url == null || url == "") {
    return false;
  } else {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
  }
};
