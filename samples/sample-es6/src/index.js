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

export default server;
