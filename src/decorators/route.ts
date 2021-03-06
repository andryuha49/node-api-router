import {methods} from '../enums/methods';

const defaultMethod: methods = methods.get;

export function route(matcher: string, method: methods | Function = defaultMethod, ...middleware) {
  return (target, key, descriptor) => {
    if (typeof matcher === 'undefined') {
      matcher = `/${key}`;
      method = defaultMethod;
    }
    if (typeof method === 'function') {
      middleware.unshift(method);
      method = defaultMethod;
    }
    if (typeof matcher === 'function') {
      middleware.unshift(matcher);
      matcher = `/${key}`;
    }

    target.$routes = target.$routes || [];
    target.$routes.push({
      fn: descriptor.value,
      matcher,
      method,
      middleware,
    });
  }
}