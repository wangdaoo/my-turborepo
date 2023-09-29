export default config;
declare const config: ({
    input: string;
    output: ({
        file: string;
        format: string;
        sourcemap: boolean;
        name?: undefined;
    } | {
        file: string;
        format: string;
        name: string;
        sourcemap: boolean;
    })[];
    plugins: import(".pnpm/rollup@3.29.4/node_modules/rollup").Plugin<any>[];
} | {
    input: string;
    output: {
        file: string;
        format: string;
    }[];
    plugins: import(".pnpm/rollup@3.29.4/node_modules/rollup").Plugin<any>[];
})[];
//# sourceMappingURL=rollup.config.d.ts.map