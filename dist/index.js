'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _router = require('./decorators/router');

Object.defineProperty(exports, 'router', {
  enumerable: true,
  get: function get() {
    return _router.router;
  }
});

var _route = require('./decorators/route');

Object.defineProperty(exports, 'route', {
  enumerable: true,
  get: function get() {
    return _route.route;
  }
});

var _httpRoutes = require('./decorators/httpRoutes');

Object.keys(_httpRoutes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _httpRoutes[key];
    }
  });
});