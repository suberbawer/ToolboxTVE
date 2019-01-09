'use-strict'
const request = require('supertest'), 
  app = require('../server/index.js'),
  chai = require('chai')

const expect = chai.expect

describe('Get "test_text"', function() {
  describe('#GET /api/getText', function() { 
    it('should get the text: test_text', function(done) { 
      request(app).get('/api/getText')
        .query({ txt: 'test_text' })
        .end(function(err, res) { 
          expect(res.body).to.be.an('object') 
          expect(res.statusCode).to.equal(200)
          expect(res.body.txt == 'test_text') 
          done() 
        })
    })
  })
})

describe('Get empty string', function() {
  describe('#GET /api/getText', function() { 
    it('should return error 500', function(done) { 
      request(app).get('/api/getText')
        .query({ txt: '' })
        .end(function(err, res) { 
          expect(res.body).to.be.an('object')
          expect(res.statusCode).to.equal(500)
          expect(res.body.errMsg == 'Something went wrong') 
          done() 
        })
    })
  })
})