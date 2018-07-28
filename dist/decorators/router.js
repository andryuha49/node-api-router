"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
function router(prefix, ...middleware) {
    let localPrefix = '/';
    if (typeof prefix === 'function') {
        return utils_1.createRouter(prefix, localPrefix, ...middleware);
    }
    else {
        localPrefix = prefix;
    }
    return (target) => utils_1.createRouter(target, localPrefix, ...middleware);
}
exports.router = router;
//# sourceMappingURL=router.js.map