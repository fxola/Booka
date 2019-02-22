import chai from 'chai';

import chaiHttp from 'chai-http';

import app from '../index';

const { expect } = chai;

chai.use(chaiHttp);

describe('Test for All Orders Endpoints', () => {
  describe('GET /orders', () => {
    /**
     * confirm that the endpoint returns the required status code
     * confirm that the response body is an object
     * confirm that the response object contains the required keys
     */
    it('should fetch all Orders from the database', done => {
      chai
        .request(app)
        .get('/api/v1/orders')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body.data[0]).to.be.an('object');
          expect(res.body.data[0]).to.have.keys(
            'id',
            'name',
            'address',
            'orderTotal',
            'phoneNumber',
            'mealOrder'
          );
          done();
        });
    });
  });

  describe('POST /orders', () => {
    /**
     * confirm that the endpoint returns the required status code
     * confirm that the response body is an object
     * confirm that the response object contains the required keys
     */
    it('should create a new order and store it in the database', done => {
      chai
        .request(app)
        .post('/api/v1/orders')
        .set('content-type', 'application/json')
        .send({
          id: 4,
          name: 'John Doe',
          address: 'No 2, Iweka road, Aba',
          orderTotal: '1500',
          phoneNumber: '08012345678',
          mealOrder: [
            {
              id: 1,
              name: 'Amala and Ewedu',
              description: 'Tasty and Palatable',
              price: '500'
            },
            {
              id: 2,
              name: 'Afang and Fufu',
              description: 'Nutritious and Yummy',
              price: '600'
            }
          ]
        })
        .end((err, res) => {
          expect(res).to.have.status(201);
          expect(res.body).to.be.an('object');
          expect(res.body.data).to.be.an('object');
          expect(res.body.data).to.have.keys(
            'id',
            'name',
            'address',
            'orderTotal',
            'phoneNumber',
            'mealOrder'
          );
          done();
        });
    });
  });

  describe('PUT /orders/:id', () => {
    /**
     * confirm that the endpoint returns the required status code
     * confirm that the response body is an object
     * confirm that the response object contains the required keys
     */
    it('should update the given order in the database', done => {
      chai
        .request(app)
        .put('/api/v1/orders/2')
        .set('content-type', 'application/json')
        .send({
          id: 2,
          name: 'Jane Doe',
          address: 'No 19, Iweka road, Aba',
          orderTotal: '1500',
          phoneNumber: '08012345678',
          mealOrder: [
            {
              id: 1,
              name: 'Amala and Ewedu',
              description: 'Tasty and Palatable',
              price: '600'
            },
            {
              id: 2,
              name: 'Afang and Fufu',
              description: 'Nutritious and Yummy',
              price: '900'
            }
          ]
        })
        .end((err, res) => {
          expect(res).to.have.status(202);
          expect(res.body).to.be.an('object');
          expect(res.body.data).to.be.an('object');
          expect(res.body.data).to.have.keys(
            'id',
            'name',
            'address',
            'orderTotal',
            'phoneNumber',
            'mealOrder'
          );
          done();
        });
    });
  });
});
