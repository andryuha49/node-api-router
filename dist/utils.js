"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
function createRouter(target, prefix) {
    if (prefix === void 0) { prefix = ''; }
    var middleware = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        middleware[_i - 2] = arguments[_i];
    }
    if (!target.name) {
        throw Error('The router must be used for a class.');
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (typeof prefix === 'function') {
            middleware.unshift(prefix);
            prefix = '';
        }
        var newTarget = new (target.bind.apply(target, [void 0].concat(args)))();
        if (!newTarget.$routes) {
            throw new Error(newTarget.name + " has no route connected");
        }
        var expressRouter = express.Router();
        for (var i = 0; i < newTarget.$routes.length; i++) {
            var routeFn = newTarget.$routes[i];
            var middle = routeFn.middleware;
            for (var m = middleware.length; m > 0; m--) {
                middle.unshift(middleware[m - 1]);
            }
            var fn = routeFn.fn.bind(newTarget);
            expressRouter[routeFn.method.toLowerCase()].apply(expressRouter, [prefix + routeFn.matcher].concat(middle, [fn]));
        }
        return expressRouter;
    };
}
exports.createRouter = createRouter;
//# sourceMappingURL=utils.js.map