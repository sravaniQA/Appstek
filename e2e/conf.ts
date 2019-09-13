import { browser, Config } from 'protractor';
const HtmlReporter = require('protractor-beautiful-reporter');
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
const env = process.env.NODE_ENV || 'local';
const  envConfig = require('./environment/' + env + '.js');
declare const allure: any;
console.log(env);
console.log(envConfig.prospectUrl);
function get_id() {
  const newDate = new Date();
  return '-' + newDate.getMonth() + '-' + newDate.getDate() + '-'
  + newDate.getFullYear() + '-' + newDate.getHours() + '-' + newDate.getMinutes();
}

export let config: Config = {
// module.exports.config = {
allScriptsTimeout: 60000,
  framework: 'jasmine2',
  capabilities: {
    browserName: 'chrome'
  },
  specs: ['./src/testcases/CommunicationManagerLoginPageTest.js'],
  // specs: [ './src/testcases/CatalystProspectLoginPageTest.js' ],
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // onPrepare: function () {
  //   browser.manage().window().maximize();
  //   const AllureReporter = require('jasmine-allure-reporter');
  //   jasmine.getEnv().addReporter(new AllureReporter({
  //     resultsDir: `allure-results-${get_id()}`
  //   }));

  //   jasmine.getEnv().afterEach(function (done) {
  //     browser.takeScreenshot().then(function (png) {
  //       allure.createAttachment('Screenshot', function () {
  //         return new Buffer(png, 'base64');
  //       }, 'image/png')();
  //       done();
  //     });
  //   });
  // },

  onPrepare: function () {
    browser.manage().window().maximize();
    //  require('jasmine-reporters');
    //  jasmine.getEnv().addReporter(new jasmine.ConsoleReporter());

    jasmine.getEnv().addReporter(new HtmlReporter({
      baseDirectory: './Reports/Jasmine2Reporter',
      docTitle: 'Catalyst Communication Manager Automation Report',
      preserveDirectory: false,
      takeScreenShotsOnlyForFailedSpecs: true,
      docName: 'CommunicationManagerTestAutomationReport.html'
    }).getJasmine2Reporter());

    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      savePath: './Reports/emailable-report/',
      fileNamePrefix: 'Catalyst_CommunicationManager_Automation_Report',
     // filePrefix: 'Catalyst_Automation_Report',
      consolidateAll: true,
      screenshotsFolder: 'reportsscreenshots',
      fileName: '',
      takeScreenshots: true,
      takeScreenshotsOnlyOnFailures: true
  }));

  },
  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: false
};
