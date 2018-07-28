"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultMethod = 'get';
function route(matcher, method) {
    if (method === void 0) { method = defaultMethod; }
    var middleware = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        middleware[_i - 2] = arguments[_i];
    }
    return function (target, key, descriptor) {
        if (typeof matcher === 'undefined') {
            matcher = "/" + key;
            method = defaultMethod;
        }
        if (typeof method === 'function') {
            middleware.unshift(method);
            method = defaultMethod;
        }
        if (typeof matcher === 'function') {
            middleware.unshift(matcher);
            matcher = "/" + key;
        }
        target.$routes = target.$routes || [];
        target.$routes.push({
            fn: descriptor.value,
            matcher: matcher,
            method: method,
            middleware: middleware,
        });
    };
}
exports.route = route;
//# sourceMappingURL=route.js.map