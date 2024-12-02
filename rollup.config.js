import terser from '@rollup/plugin-terser';

const devMode = (process.env.NODE_ENV === 'development');
console.log(`${ devMode ? 'development' : 'production' } mode bundle`);


export default [
  {
    input: 'src/index.js',
    output: [{
      file: "dist/index.js",
      format: 'es',
      sourcemap: devMode ? 'inline' : false,
     
    },
    {
      file: 'dist/index.min.js',
      format: 'iife',
      name: 'MyLibrary',
      plugins: [terser()],
    }],
    plugins: [
      terser({
        format: {
          comments: false,
        },
        compress: {
          drop_console: true,
        },
      }),
    ]
  }
]