'use strict';

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'browserify', 'fixture'],
    files: [
      'test/fixtures/*.html',
      'test/**/*.spec.js'
    ],
    exclude: [],
    preprocessors: {
      'test/fixtures/*.html': ['html2js'],
      'app/src/**/*.js': ['browserify'],
      'test/**/*.spec.js': ['browserify']
    },
    browserify: {
     debug: true,
     transform: [
       ['babelify']
      ]
    },
    babelPreprocessor: {},
    reporters: ['mocha'],
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
