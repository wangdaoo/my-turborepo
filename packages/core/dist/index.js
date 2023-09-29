'use strict';

var utils = require('@turbo/utils');

const id = utils.uniqueId('core_');
const core = () => {
    console.log('core', id);
};
core();
const core2 = () => {
    console.log('core2', id);
};
core2();

exports.id = id;
//# sourceMappingURL=index.js.map
