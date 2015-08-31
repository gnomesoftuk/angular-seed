module.exports = function(config){
  config.set({

    basePath : '../',

    files : [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/components/**/*.js',
      'app/view*/**/*.js',
      'test/unit/**/*-spec.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    //browsers : ['Chrome'],

    browsers: ['Chrome_small'],

    customLaunchers: {
        Chrome_small: {
            base: 'Chrome',
            flags: [
                '--window-size=600,200',
                '--window-position=0,0'
            ]
        }
    },

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
