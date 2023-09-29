(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@turbo/utils')) :
    typeof define === 'function' && define.amd ? define(['exports', '@turbo/utils'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TurboCore = {}, global.utils));
})(this, (function (exports, utils) { 'use strict';

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

}));
//# sourceMappingURL=index.umd.js.map
