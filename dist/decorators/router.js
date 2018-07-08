'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.router = router;

var _utils = require('../utils');

function router() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (typeof args[0] === 'function') {
    return _utils.createRouter.apply(undefined, args);
  }
  return function (target) {
    return _utils.createRouter.apply(undefined, [target].concat(args));
  };
}