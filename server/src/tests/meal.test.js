import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../index';

const { expect } = chai;

chai.use(chaiHttp);

describe('Test for All Meal Endpoints', () => {
  describe('GET /meals', () => {
    /**
     * confirm that the endpoint returns the required status code
     * confirm that the response body is an object
     * confirm that the response object contains the required keys
     */
    it('should fetch all meals from the database', done => {
      chai
        .request(app)
        .get('/api/v1/meals')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.data[0]).to.have.keys('id', 'name', 'description', 'price');
          done();
        });
    });
  });
});
