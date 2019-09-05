import babel from 'rollup-plugin-babel';
import commonJs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

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
    ],
};
