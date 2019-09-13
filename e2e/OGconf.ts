import { Config, browser } from 'protractor';
const HtmlReporter = require('protractor-beautiful-reporter');

export let config: Config = {
  allScriptsTimeout: 60000,
  framework: 'jasmine',
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['./src/testcases/CatalystLibraryTest.js'],
  // specs: [ './src/CatalystProspectLoginPageTest.js' ],
  seleniumAddress: 'http://localhost:4444/wd/hub',

  onPrepare: function () {
    browser.manage().window().maximize();
    //  require('jasmine-reporters');
    //  jasmine.getEnv().addReporter(new jasmine.ConsoleReporter());

    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: './Reports/screenshots',
      docTitle: 'Catalyst Automation Report',
      preserveDirectory: false,
      takeScreenShotsOnlyForFailedSpecs: true,
      docName: 'TestAutomationReport.html'
    }).getJasmine2Reporter());
  },
  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: false
};
