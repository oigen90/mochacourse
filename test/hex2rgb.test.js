/**
 * Created by oigen_air on 12/18/16.
 */
var assert = require('assert');
var hex2rgb = require('../lib/hex2rgb');

describe('hex2rgb', function () {

    it('should throw an error if the value is not a hex code', function () {
        assert.throws(function () {
            return hex2rgb('blue')
        }, /Invalid hexadecimal string/);
    });

    it('should return a correctly converted RGB value', function () {
        var rgb = hex2rgb('#fff');
        assert.deepEqual(rgb, [255, 255, 255]);
    });

});