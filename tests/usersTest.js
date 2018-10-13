//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../samples/sample-es6/build/main').default;
let should = chai.should();

chai.use(chaiHttp);

const authorizationKey = 'YWRtaW46cGFzcw==';
const testAuthorization = (method, url) => {
  return it('it should request with incorrect authorization header', (done) => {
    chai.request(server)
      [method](url)
      .set('authorization', '1YWRtaW46cGFzcw==')
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });
};

//Our parent block
describe('Users', () => {
  beforeEach((done) => {
    done();
  });

  /*
    * Test the /GET route
    */
  describe('/GET users', () => {
    testAuthorization('get', '/api/v1/users');
    it('it should GET all the users', (done) => {
      chai.request(server)
        .get('/api/v1/users')
        .set('authorization', authorizationKey)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(4);
          done();
        });
    });
  });

  /*
    * Test the /GET route by method name
    */
  describe('/GET users by method name', () => {

    testAuthorization('get', '/api/v1/users/getAllUsers');

    it('it should GET all the users by method name', (done) => {
      chai.request(server)
        .get('/api/v1/users/getAllUsers')
        .set('authorization', authorizationKey)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(4);
          done();
        });
    });
  });

  /*
    * Test the /GET route
    */
  describe('/GET user by id', () => {

    testAuthorization('get', '/api/v1/users/1');

    it('it should GET user by incorrect id', (done) => {
      chai.request(server)
        .get('/api/v1/users/1idIncorrect')
        .set('authorization', authorizationKey)
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });

    it('it should GET user by id', (done) => {
      chai.request(server)
        .get('/api/v1/users/1')
        .set('authorization', authorizationKey)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.id.should.be.eql(1);
          done();
        });
    });
  });

  /*
  * Test the /PUT route
  */
  describe('/PUT user', () => {
    testAuthorization('put', '/api/v1/users/1');

    it('it should PUT user', (done) => {
      chai.request(server)
        .put('/api/v1/users/1')
        .set('authorization', authorizationKey)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('ok');
          done();
        });
    });
  });

  /*
  * Test the /PATCH route
  */
  describe('/PATCH user', () => {
    testAuthorization('patch', '/api/v1/users/1');

    it('it should PATCH user', (done) => {
      chai.request(server)
        .patch('/api/v1/users/1')
        .set('authorization', authorizationKey)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('ok');
          done();
        });
    });
  });

  /*
  * Test the /POST route
  */
  describe('/POST user', () => {
    testAuthorization('post', '/api/v1/users');

    it('it should PUT user', (done) => {
      chai.request(server)
        .post('/api/v1/users')
        .set('authorization', authorizationKey)
        .send({
          login: 'user5',
          firstName: 'Firstname5',
          lastName: 'Lastname5'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('ok');
          done();
        });
    });
  });

  /*
  * Test the /DELETE route
  */
  describe('/DELETE user', () => {
    testAuthorization('delete', '/api/v1/users/1');

    it('it should DELETE user', (done) => {
      chai.request(server)
        .delete('/api/v1/users/1')
        .set('authorization', authorizationKey)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.message.should.be.eql('ok');
          done();
        });
    });
  });
});