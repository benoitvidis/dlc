const Metalsmith = require('metalsmith');
const babel = require('metalsmith-babel');
const browserfify = require('metalsmith-browserify');
const collections = require('metalsmith-collections');
const debug = require('metalsmith-debug');
const layouts = require('metalsmith-layouts');
const permalinks = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .source('src')
  .destination('dist')
  .clean(true)
  .use(permalinks({
    relative: false
  }))
  .use(layouts({
    default: 'default.dot',
    pattern: '**/*.html'
  }))
  .use(browserfify({
    entries: ['assets/js/main.js']
  }))
  .use(babel({
    presets: [
      ['env', {
        targets: {
          browsers: ['last 2 versions']
        }
      }]
    ]
  }))
  .use(debug())
  .build(function(err) {
    if (err) throw err;
  });

