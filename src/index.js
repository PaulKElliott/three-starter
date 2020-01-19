import { makeBall } from './CoolModule';

// If this is being included via script tag and using THREE
// globals, attach our exports to THREE.
if (typeof window !== 'undefined' && typeof window.THREE === 'object') {
  window.THREE.Starter = { makeBall: makeBall };
}

export {
  makeBall
};
