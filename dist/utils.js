'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRouter = createRouter;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function createRouter(target) {
  for (var _len = arguments.length, middleware = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    middleware[_key - 2] = arguments[_key];
  }

  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  return function () {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (typeof prefix === 'function') {
      middleware.unshift(prefix);
      prefix = '';
    }
    var newTarget = new (Function.prototype.bind.apply(target, [null].concat(args)))();

    if (!newTarget.$routes) {
      throw new Error(newTarget.name + ' has no route connected');
    }

    var expressRouter = _express2.default.Router();

    for (var i = 0; i < newTarget.$routes.length; i++) {
      var routeFn = newTarget.$routes[i];
      var middle = routeFn.middleware;
      for (var m = middleware.length; m > 0; m--) {
        middle.unshift(middleware[m - 1]);
      }
      var fn = routeFn.fn.bind(newTarget);
      expressRouter[routeFn.method.toLowerCase()].apply(expressRouter, [routeFn.matcher].concat(_toConsumableArray(middle), [fn]));
    }
    var res = null;
    if (prefix !== '') {
      res = _express2.default.Router();
      res.use(prefix, expressRouter);
    } else {
      res = expressRouter;
    }

    return res;
  };
}