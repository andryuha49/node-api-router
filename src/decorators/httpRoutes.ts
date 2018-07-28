import {route} from './route';

function httpOptions(matcher: string, ...middleware) {
  return route(matcher, 'options', ...middleware);
}

function httpGet(matcher: string, ...middleware) {
  return route(matcher, 'get', ...middleware);
}

function httpPost(matcher: string, ...middleware) {
  return route(matcher, 'post', ...middleware);
}

function httpPut(matcher: string, ...middleware) {
  return route(matcher, 'put', ...middleware);
}

function httpDelete(matcher: string, ...middleware) {
  return route(matcher, 'delete', ...middleware);
}

export {httpOptions,httpGet,httpPost,httpPut,httpDelete}
