"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
function httpOptions(matcher, ...middleware) {
    return route_1.route(matcher, 'options', ...middleware);
}
exports.httpOptions = httpOptions;
function httpGet(matcher, ...middleware) {
    return route_1.route(matcher, 'get', ...middleware);
}
exports.httpGet = httpGet;
function httpPost(matcher, ...middleware) {
    return route_1.route(matcher, 'post', ...middleware);
}
exports.httpPost = httpPost;
function httpPut(matcher, ...middleware) {
    return route_1.route(matcher, 'put', ...middleware);
}
exports.httpPut = httpPut;
function httpDelete(matcher, ...middleware) {
    return route_1.route(matcher, 'delete', ...middleware);
}
exports.httpDelete = httpDelete;
//# sourceMappingURL=httpRoutes.js.map