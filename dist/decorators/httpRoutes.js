'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.httpDelete = exports.httpPut = exports.httpPost = exports.httpGet = exports.httpOptions = undefined;

var _route = require('./route');

function httpOptions(matcher) {
  for (var _len = arguments.length, middleware = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    middleware[_key - 1] = arguments[_key];
  }

  return _route.route.apply(undefined, [matcher, 'options'].concat(middleware));
}

function httpGet(matcher) {
  for (var _len2 = arguments.length, middleware = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    middleware[_key2 - 1] = arguments[_key2];
  }

  return _route.route.apply(undefined, [matcher, 'get'].concat(middleware));
}

function httpPost(matcher) {
  for (var _len3 = arguments.length, middleware = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    middleware[_key3 - 1] = arguments[_key3];
  }

  return _route.route.apply(undefined, [matcher, 'post'].concat(middleware));
}

function httpPut(matcher) {
  for (var _len4 = arguments.length, middleware = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    middleware[_key4 - 1] = arguments[_key4];
  }

  return _route.route.apply(undefined, [matcher, 'put'].concat(middleware));
}

function httpDelete(matcher) {
  for (var _len5 = arguments.length, middleware = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    middleware[_key5 - 1] = arguments[_key5];
  }

  return _route.route.apply(undefined, [matcher, 'delete'].concat(middleware));
}

exports.httpOptions = httpOptions;
exports.httpGet = httpGet;
exports.httpPost = httpPost;
exports.httpPut = httpPut;
exports.httpDelete = httpDelete;