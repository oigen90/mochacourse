/**
 * Created by oigen_air on 12/18/16.
 */
var assert = require('assert');
var hex2rgb = require('../lib/hex2rgb');

describe('hex2rgb', function () {

    it('should return an error if the value is not a hex code', function (done) {
        
        hex2rgb('blue', function (error, result) {
            assert(error);

            done();
        });

    });

    it('should return a correctly converted RGB value', function (done) {

        hex2rgb('#fff', function (error, result) {
            assert.strictEqual(error, null);
            assert.deepEqual(result, [255, 255, 255]);

            done();
        });
        
    });

});