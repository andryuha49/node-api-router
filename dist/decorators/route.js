"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultMethod = 'get';
function route(matcher, method = defaultMethod, ...middleware) {
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
    };
}
exports.route = route;
//# sourceMappingURL=route.js.map