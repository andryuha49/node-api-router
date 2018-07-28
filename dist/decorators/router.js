"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
function router(prefix) {
    var middleware = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        middleware[_i - 1] = arguments[_i];
    }
    var localPrefix = '/';
    if (typeof prefix === 'function') {
        return utils_1.createRouter.apply(void 0, [prefix, localPrefix].concat(middleware));
    }
    else {
        localPrefix = prefix;
    }
    return function (target) { return utils_1.createRouter.apply(void 0, [target, localPrefix].concat(middleware)); };
}
exports.router = router;
//# sourceMappingURL=router.js.map