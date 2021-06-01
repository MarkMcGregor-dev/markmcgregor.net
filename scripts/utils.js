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
