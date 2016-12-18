/**
 * Created by oigen_air on 12/18/16.
 */

var assert = require('assert');
var getPalette = require('../lib/getPalette');

describe('getPalette', function () {
    it('should return an array of 3 items', function () {

        var palette = getPalette();
        assert(Array.isArray(palette), 'did not return an array');
        assert.equal(palette.length, 3, 'did not return 3 items');

    })
});