import babel from 'rollup-plugin-babel';
import commonJs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';

import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';

export default {
    input: 'src/scripts/main.js',
    output: {
        file: 'docs/assets/scripts/main.js',
        format: 'iife',
    },
    plugins: [
        babel(),
        nodeResolve(),
        commonJs(),
        postcss({
            plugins: [
                postcssImport(),
                postcssMixins(),
            ],
        }),
    ],
};
