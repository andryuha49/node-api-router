import {route} from './route';

function httpOptions(matcher, ...middleware) {
  return route(matcher, 'options', ...middleware);
}

function httpGet(matcher, ...middleware) {
  return route(matcher, 'get', ...middleware);
}

function httpPost(matcher, ...middleware) {
  return route(matcher, 'post', ...middleware);
}

function httpPut(matcher, ...middleware) {
  return route(matcher, 'put', ...middleware);
}

function httpDelete(matcher, ...middleware) {
  return route(matcher, 'delete', ...middleware);
}

export {httpOptions,httpGet,httpPost,httpPut,httpDelete}
