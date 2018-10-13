"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var route_1 = require("./route");
var methods_1 = require("../enums/methods");
function httpOptions(matcher) {
    var middleware = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        middleware[_i - 1] = arguments[_i];
    }
    return route_1.route.apply(void 0, [matcher, methods_1.methods.options].concat(middleware));
}
exports.httpOptions = httpOptions;
function httpGet(matcher) {
    var middleware = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        middleware[_i - 1] = arguments[_i];
    }
    return route_1.route.apply(void 0, [matcher, methods_1.methods.get].concat(middleware));
}
exports.httpGet = httpGet;
function httpPost(matcher) {
    var middleware = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        middleware[_i - 1] = arguments[_i];
    }
    return route_1.route.apply(void 0, [matcher, methods_1.methods.post].concat(middleware));
}
exports.httpPost = httpPost;
function httpPut(matcher) {
    var middleware = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        middleware[_i - 1] = arguments[_i];
    }
    return route_1.route.apply(void 0, [matcher, methods_1.methods.put].concat(middleware));
}
exports.httpPut = httpPut;
function httpPatch(matcher) {
    var middleware = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        middleware[_i - 1] = arguments[_i];
    }
    return route_1.route.apply(void 0, [matcher, methods_1.methods.patch].concat(middleware));
}
exports.httpPatch = httpPatch;
function httpDelete(matcher) {
    var middleware = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        middleware[_i - 1] = arguments[_i];
    }
    return route_1.route.apply(void 0, [matcher, methods_1.methods.delete].concat(middleware));
}
exports.httpDelete = httpDelete;
//# sourceMappingURL=httpRoutes.js.map