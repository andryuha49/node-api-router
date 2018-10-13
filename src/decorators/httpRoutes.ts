import {route} from './route';
import {methods} from '../enums/methods';

function httpOptions(matcher: string, ...middleware) {
  return route(matcher, methods.options, ...middleware);
}

function httpGet(matcher: string, ...middleware) {
  return route(matcher, methods.get, ...middleware);
}

function httpPost(matcher: string, ...middleware) {
  return route(matcher, methods.post, ...middleware);
}

function httpPut(matcher: string, ...middleware) {
  return route(matcher, methods.put, ...middleware);
}

function httpPatch(matcher: string, ...middleware) {
  return route(matcher, methods.patch, ...middleware);
}

function httpDelete(matcher: string, ...middleware) {
  return route(matcher, methods.delete, ...middleware);
}

export {httpOptions,httpGet,httpPost,httpPut,httpDelete,httpPatch}
