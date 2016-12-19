/**
 * Created by oigen_air on 12/18/16.
 */
var expect = require('chai').expect;
var hex2rgb = require('../lib/hex2rgb');

describe('hex2rgb', function () {

    it('should return an error if the value is not a hex code', function (done) {
        
        hex2rgb('blue', function (error, result) {
            expect(error).to.exist;

            done();
        });

    });

    it('should return a correctly converted RGB value', function (done) {

        hex2rgb('#fff', function (error, result) {

            expect(error).to.not.exist;
            expect(result).to.deep.equal([255, 255, 255]);

            done();
        });
        
    });

});