const Bundler = require('parcel-bundler');
const Path = require('path');
var Promise = require('promise');

const entryFiles = Path.join(__dirname, './src/CurveComposer.js');

// https://parceljs.org/api.html
const options = {
  outDir: './build',
  outFile: 'CurveComposer.js',
  publicUrl: './',
  cache: false,
  minify: false,
  target: 'node',
  bundleNodeModules: true,
  sourceMaps: false,
  scopeHoist: false,
  watch: false
}

const bundler = new Bundler(entryFiles, options)
bundler.bundle().then( result => {

  const bundlerMin = new Bundler(entryFiles, Object.assign({},
    options,{
      minify: true,
      outFile: options.outFile.replace('.js', '.min.js')
    }))
  bundlerMin.bundle()

})
