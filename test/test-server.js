var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server/app');
var should = chai.should();

chai.use(chaiHttp);

describe('Poems', function () {
    it('should list ALL poems on /poems GET', function (done) {
        chai.request('http://localhost:3000')
            .get('/poems')
            .end(function (err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('should list 10 random poems on /random GET');
    it('should return a number of random poems on /random:number GET');
});