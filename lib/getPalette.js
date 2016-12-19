/**
 * Created by oigen_air on 12/18/16.
 */

var fs = require('fs');

function getConfig() {
    return JSON.parse(fs.readFileSync(process.cwd() + '/config.json').toString());
}

module.exports = function () {

    var palette = getConfig().palette;

    if (!Array.isArray(palette)) {
        throw new Error('Palette is not an array');
    }

    return palette;

};