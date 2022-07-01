import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'
import { uglify } from 'rollup-plugin-uglify';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';

import pkg from './package.json'

const config = {
    input: './src/index.ts',
    external: ['lodash'],
    output: [
        {
            globals: {
                'lodash': 'lodash'
            },
            file: pkg.main,
            format: 'umd',
            name: 'username-creator'
        },
    ],
    plugins: [
        external(),
        typescript({
            tsconfig: 'tsconfig.json',
            tsconfigOverride: { compilerOptions: { module: 'es2015' } },
        }),
        nodeResolve({
            preferBuiltins: false
        }),
        nodePolyfills(),
        commonjs()
    ]
}

if (process.env.NODE_ENV === 'production') {
    config.plugins.push(uglify());
}

export default config