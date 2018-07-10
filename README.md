# node-api-router

This is a simple [Node.js](https://nodejs.org/en/) module for configuration [express](https://expressjs.com/) router using MVC code style.

## Installation

Using npm:
```bash
$ npm install node-api-router --save
```
Using latest version on github.com (only for testing)
```bash
$ npm install https://github.com/andryuha49/node-api-router --save
```

## Using

Create simple controller and to app configuration <br />
app: 
```js
import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import {UsersController} from './controllers/usersController';

const app = express();
const server = http.createServer(app);
app.use(bodyParser.json({ limit: '50mb' })); // Parse application/json
app.use('/api/v1', new UsersController());

const port = process.env.PORT || 3001;
server.listen(port, () => {
  console.log('[Express] Api is running on port', port);
});
```
controller
```js
import {router, route} from 'node-api-router';

const globalMiddleware = (req, res, next) => {
  return next();
};

const methodMiddleware = (req, res, next) => {
  return next();
};

@router('/users', globalMiddleware)
export class UsersController {
  @route('/', 'get')
  getAll(req, res) {
    return res.status(200).json([{id: 1, login:'user1'},{id: 2, login:'user2'}]);
  }
  
  @route('/:id', 'get', methodMiddleware)
  getById(req, res) {
    return res.status(200).json({id: 1, login:'user1'});
  }
  @route('/:id', 'put')
  put(req, res) {
    return res.status(200).json({message:'ok'});
  }
  @route('/', 'post')
  post(req, res) {
    return res.status(200).json({message:'ok'});
  }
  @route('/:id', 'delete')
  delete(req, res) {
    return res.status(200).json({message:'ok'});
  }
}
```
Also available to use custom decorators
```js
import {router, httpGet, httpPost, httpPut, httpDelete} from 'node-api-router';

@router('/users')
export class UsersController {
  @httpGet('/')
  getAll(req, res) {
    return res.status(200).json([{id: 1, login:'user1'},{id: 2, login:'user2'}]);
  }
  @httpGet('/:id')
  getById(req, res) {
    return res.status(200).json({id: 1, login:'user1'});
  }
  @httpPut('/:id')
  put(req, res) {
    return res.status(200).json({message:'ok'});
  }
  @httpPost('/')
  post(req, res) {
    return res.status(200).json({message:'ok'});
  }
  @httpDelete('/:id')
  delete(req, res) {
    return res.status(200).json({message:'ok'});
  }
}
```
If set **route** decorator without any parameters you can use route by method name
```js
  @route()
  getAllUsers(req, res) {
    const users = this.usersRepository.getAll();
    return res.status(200).json(users);
  }
```
You can use GET method by URL
```bash
http://localhost:3001/api/v1/users/getAllUsers
```

## Examples

Available ES6 example in this [folder](https://github.com/andryuha49/node-api-router/tree/dev/samples/sample-es6)

## License

[MIT](LICENSE)
