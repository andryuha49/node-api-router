'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _router = require('./decorators/router');

Object.keys(_router).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _router[key];
    }
  });
});

var _route = require('./decorators/route');

Object.keys(_route).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _route[key];
    }
  });
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