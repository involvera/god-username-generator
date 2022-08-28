import typescript from 'rollup-plugin-typescript2'
import { uglify } from 'rollup-plugin-uglify';
import commonjs from '@rollup/plugin-commonjs';

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
        typescript({
            tsconfig: 'tsconfig.json',
            tsconfigOverride: { compilerOptions: { module: 'es2015' } },
        }),
        commonjs(),
        uglify()
    ]
}

export default config