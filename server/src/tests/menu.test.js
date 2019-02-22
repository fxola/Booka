import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../index';

const { expect } = chai;

chai.use(chaiHttp);

describe('Tests for all Menu Endpoints', () => {
  describe('GET /Menu', () => {
    /**
     * confirm that the endpoint returns the required status code
     * confirm that the response body is an object
     * confirm that the response object contains the required keys
     */
    it('should fetch all menus from the database', done => {
      chai
        .request(app)
        .get('/api/v1/menu')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.data[0]).to.be.an('object');
          expect(res.body.data[0]).to.have.keys('id', 'meals', 'date');
          expect(res.body.data[0].meals).to.be.an('array');
          done();
        });
    });
  });

  describe('POST /menu', () => {
    /**
     * confirm that the endpoint returns the required status code
     * confirm that the response body is an object
     * confirm that the response object contains the required keys
     */
    it('should create a new menu and store it in the database', done => {
      chai
        .request(app)
        .post('/api/v1/menu')
        .set('content-type', 'application/json')
        .send({
          id: 300,
          meals: [
            {
              id: 1,
              name: 'New Meal Option',
              description: 'Nutritious and palatable',
              price: '400'
            },
            {
              id: 2,
              name: 'new meal',
              description: 'Nutritious and palatable',
              price: '400'
            }
          ],
          date: '2019-02-17'
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body.data).to.be.an('object');
          expect(res.body.data).to.have.keys('id', 'meals', 'date');
          expect(res.body.data.meals).to.be.an('array');
          done();
        });
    });
  });
});
