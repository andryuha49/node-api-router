"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require("./route");
function httpOptions(matcher) {
    var middleware = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        middleware[_i - 1] = arguments[_i];
    }
    return route_1.route.apply(void 0, [matcher, 'options'].concat(middleware));
}
exports.httpOptions = httpOptions;
function httpGet(matcher) {
    var middleware = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        middleware[_i - 1] = arguments[_i];
    }
    return route_1.route.apply(void 0, [matcher, 'get'].concat(middleware));
}
exports.httpGet = httpGet;
function httpPost(matcher) {
    var middleware = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        middleware[_i - 1] = arguments[_i];
    }
    return route_1.route.apply(void 0, [matcher, 'post'].concat(middleware));
}
exports.httpPost = httpPost;
function httpPut(matcher) {
    var middleware = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        middleware[_i - 1] = arguments[_i];
    }
    return route_1.route.apply(void 0, [matcher, 'put'].concat(middleware));
}
exports.httpPut = httpPut;
function httpDelete(matcher) {
    var middleware = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        middleware[_i - 1] = arguments[_i];
    }
    return route_1.route.apply(void 0, [matcher, 'delete'].concat(middleware));
}
exports.httpDelete = httpDelete;
//# sourceMappingURL=httpRoutes.js.map