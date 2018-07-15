import express from 'express';

export function createRouter(target, prefix = '', ...middleware) {
  return (...args) => {
    if (typeof prefix === 'function') {
      middleware.unshift(prefix);
      prefix = '';
    }
    const newTarget = new target(...args);

    if (!newTarget.$routes) {
      throw new Error(`${newTarget.name} has no route connected`);
    }

    const expressRouter = express.Router();

    for (let i = 0; i < newTarget.$routes.length; i++) {
      const routeFn = newTarget.$routes[i];
      const middle = routeFn.middleware;
      for (let m = middleware.length; m > 0; m--) {
        middle.unshift(middleware[m - 1]);
      }
      const fn = routeFn.fn.bind(newTarget);
      expressRouter[routeFn.method.toLowerCase()](prefix + routeFn.matcher, ...middle, fn);
    }

    return expressRouter;
  };
}