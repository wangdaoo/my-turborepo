import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

// const config: import('rollup').RollupOptions[] = [
const config = [
    {
        input: 'src/index.ts',
        output: [
            {
                file: './dist/index.esm.js',
                format: 'es',
                sourcemap: true,
            },
            {
                file: './dist/index.js',
                format: 'cjs',
                sourcemap: true,
            },
            {
                file: './dist/index.umd.js',
                format: 'umd',
                name: 'TurboCore',
                sourcemap: true,
            },
        ],
        plugins: [
            typescript({
                tsconfig: './tsconfig.json', // 导入本地ts配置
            }),
        ],
    },
    {
        input: 'src/index.ts',
        output: [{ file: 'dist/index.d.ts', format: 'es' }],
        plugins: [dts()],
    },
];
export default config;
