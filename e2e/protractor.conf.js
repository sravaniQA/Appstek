// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  //seleniumServerStartTimeout: 60000, //how much to wait for selenium jar file to invoke & open browser
  //getPageTimeout: 20000, //waits for the angular variable to be present when loading a NEW page - default is 10 sec 
  //allScriptsTimeout: 60000, //wait for an asynchronous(promise event) script to finish execution before throwing an error - default is 11 sec
 
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome'
  },

  suites: {
    repeatable: 'example/example.spec.js'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 3000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};