import {createRouter} from '../utils';

export function router(prefix: string | Function, ...middleware)  {
  let localPrefix = '/';
  if (typeof prefix === 'function') {
    return createRouter(prefix, localPrefix, ...middleware);
  } else {
    localPrefix = prefix;
  }
  return (target) => createRouter(target, localPrefix, ...middleware);
}