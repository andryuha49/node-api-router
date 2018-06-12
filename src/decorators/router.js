import {createRouter} from '../utils';

export function router(...args) {
  if (typeof args[0] === 'function') {
    return createRouter(...args);
  }
  return (target) => createRouter(target, ...args);
}