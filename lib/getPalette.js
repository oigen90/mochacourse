/**
 * Created by oigen_air on 12/18/16.
 */

function getData() {
    return ['#dddddd', '#900455', '#0055ff'];
}

module.exports = function (fetch) {
    fetch = fetch || getData;
    var palette = fetch();

    if (!Array.isArray(palette)) {
        throw new Error('Palette is not an array');
    }

    return palette;
};