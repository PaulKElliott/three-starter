
import { SphereBufferGeometry, MeshBasicMaterial,  Mesh } from 'three';

export function makeBall(radius) {
  const geometry = new SphereBufferGeometry(radius, 32, 32);
  const material = new MeshBasicMaterial({color: 0x0000ff});
  const sphere = new Mesh(geometry, material);
  return sphere;
}