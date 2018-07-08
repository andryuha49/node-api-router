import {router, route} from 'node-api-router';
import {UsersRepository} from '../repositories/usersRepository';
import {basicAuthorizeMiddelware} from '../middelwares/basicAuthorizeMiddelware';

const validateIdMiddleware = (req, res, next) => {
  const id = req.params.id;
  if (!isNaN(id) && parseInt(Number(id)) == id && !isNaN(parseInt(id, 10))) {
    return next();
  }
  return res.status(400).json({message: 'ID must be integer'});
};

/**
 * Use global middleware for controller
 * Basic authorization middleware - user:"admin", password:"pass"
 * For example add request header authorization:YWRtaW46cGFzcw==
 */
@router('/users', basicAuthorizeMiddelware('admin', 'pass'))
export class UsersController {
  constructor() {
    this.usersRepository = new UsersRepository();
  }

  /**
   * Use route by method name
   */
  @route()
  getAllUsers(req, res) {
    const users = this.usersRepository.getAll();
    return res.status(200).json(users);
  }

  @route('/') //method get by default
  getAll(req, res) {
    const users = this.usersRepository.getAll();
    return res.status(200).json(users);
  }

  /**
   * Use middleware for method
   */
  @route('/:id', 'get', validateIdMiddleware)
  getById(req, res) {
    const id = req.params.id;
    const user = this.usersRepository.getById(id);
    return res.status(200).json(user);
  }

  @route('/:id', 'put', validateIdMiddleware)
  put(req, res) {
    const id = req.params.id;
    const data = req.body;

    this.usersRepository.update(id, data);
    return res.status(200).json({message: 'ok'});
  }

  @route('/', 'post')
  post(req, res) {
    const data = req.body;

    this.usersRepository.create(data);
    return res.status(200).json({message: 'ok'});
  }

  @route('/:id', 'delete', validateIdMiddleware)
  delete(req, res) {
    const id = req.params.id;

    this.usersRepository.delete(id);
    return res.status(200).json({message: 'ok'});
  }
}
