import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import filesize from 'rollup-plugin-filesize';
import autoprefixer from 'autoprefixer';
import localResolve from 'rollup-plugin-local-resolve';

let pkg = require('./package.json');

const config = {
  input: 'src/index.js',
  output: [
    {
      file: pkg.browser,
      format: 'umd',
      name: 'Occult',
    },
    {
      file: pkg.main,
      format: 'cjs',
      name: 'Occult',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    'react',
    'react-dom',
  ],
  plugins: [
    peerDepsExternal(),
    localResolve(),
    resolve({ jsnext: true }),
    babel({ exclude: 'node_modules/**' }),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        "node_modules/d3-glyphedge/build/d3-glyphEdge.js": [
          "d",
          "project",
          "mutate",
        ],
        "node_modules/d3-sankey-circular/dist/index.js": [
          "sankeyCircular",
          "sankeyLeft",
          "sankeyCenter",
          "sankeyRight",
          "sankeyJustify"
        ],
        "process": ["nextTick"],
        "node_modules/events/events.js": ["EventEmitter"]
      }
    }),
    filesize(),
  ],
};

export default config;