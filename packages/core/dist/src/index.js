import { uniqueId } from '@turbo/utils';
export const id = uniqueId('core_');
const core = () => {
    console.log('core', id);
};
core();
const core2 = () => {
    console.log('core2', id);
};
core2();
//# sourceMappingURL=index.js.map