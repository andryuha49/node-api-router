'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.route = route;
var defaultMethod = 'get';

function route(matcher) {
  for (var _len = arguments.length, middleware = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    middleware[_key - 2] = arguments[_key];
  }

  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultMethod;

  return function (target, key, descriptor) {
    if (typeof matcher === 'undefined') {
      matcher = '/' + key;
      method = defaultMethod;
    }
    if (typeof method === 'function') {
      middleware.unshift(method);
      method = defaultMethod;
    }
    if (typeof matcher === 'function') {
      middleware.unshift(matcher);
      matcher = '/' + key;
    }

    target.$routes = target.$routes || [];
    target.$routes.push({
      fn: descriptor.value,
      matcher: matcher,
      method: method,
      middleware: middleware
    });
  };
}