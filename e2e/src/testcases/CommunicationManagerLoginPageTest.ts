import { browser, by, element } from 'protractor';
import { WebAppCommon } from '../genericmethods/WebAppCommon';
import { CommunicationManagerLoginPage } from '../pageobjectmodel/CommunicationManagerLoginPO';
//import { async } from 'q';

const env = process.env.NODE_ENV || 'local';
const  envConfig = require('../../environment/' + env );
console.log(envConfig.prospectUrl);
  

const using = require('jasmine-data-provider');
const loginPageTD = require('../testdata/CommunicationLoginTD');

const common = new WebAppCommon();
const catalyst = new CommunicationManagerLoginPage();


describe('Verifying Labels on Prospect Login Page', function () {
    console.log('Verifying Labels on Prospect Login Page');

    beforeAll(function (done) {
        browser.ignoreSynchronization = true;
        catalyst.extendAccountDuration(done);
        common.OpenBrowser(envConfig.prospectUrl);
   
    });

    it('Validate the static text on login Page - ' + loginPageTD.loginPageLabels.header1, function () {
        browser.sleep(5000);
        catalyst.verifyHeaderText1();

    });

    it('Validate the static text on login Page - ' + loginPageTD.loginPageLabels.header2, function () {
        browser.sleep(5000);
        catalyst.verifyHeaderText2();

    });

    it('Validate the static text on login Page - ' + loginPageTD.loginPageLabels.header3, function () {
        browser.sleep(5000);
        catalyst.verifyHeaderText3();

    });
   
    
});

describe('Login scenario', function () {
   
    using(envConfig.userCredentials, function (data, description) {
        
        it('Validate login with ' + description + '-' + data.email + '/' + data.password, async function () {
            console.log('Data object---------------------', data);
            await catalyst.performLogin(data.email, data.password);
           
            if (description === 'Invalid Email') {
                await catalyst.msgOnInvalidUID();
                console.log('Validated for Invalid Email');
                browser.sleep(2000);
            } else if (description === 'Incorrect Password') {
                browser.sleep(2000);
                await catalyst.msgOnInvalidPwd();
                console.log('Validated for Incorrect pwd');
            } else if (description === 'Correct UID & Pwd') {
               await catalyst.validateProspectDashboardHeader();
               browser.sleep(2000);
                console.log('Logged-in Successfully');
            } else {
                browser.sleep(2000);
                console.log('Something went wrong!');
            }
            
        });
    });
    
});
describe('Filters scenario', function () { 
    it('Validate Filters Functionality with ' , async function () {
            browser.sleep(3000);
            await catalyst.Performfilteroptions(); 
            await catalyst.validatefiltersoptions();
            console.log('Filter options performed successfully')
            
    });
    it('Validate the Data Protection Privacy count- ' + loginPageTD.Filtersvalidation.DataProtectionandPrivacycount, function () {
        browser.sleep(3000);
        catalyst.verifyDataProtectionPrivacycount();

    });
    // it('Clickon  Bribery and Corruption link ' , async function () {
    //     browser.sleep(3000);
    //     await catalyst.PerformBriberyCorruptionfilteroptions();
    //     console.log('Bribery and Corruption option performed successfully')
        
    // });
    it('Validate the Bribery and Corruption count- ' + loginPageTD.Filtersvalidation.BriberyCorruptioncount, function () {
        catalyst.PerformBriberyCorruptionfilteroptions();
        browser.sleep(3000);
        catalyst.verifyBriberyandCorruptioncount();

    });
    // it('Clickon  Conflicts of Interestfilter option link ' , async function () {
    //     browser.sleep(3000);
    //     await catalyst.PerformConflictsofInterestfilteroptions();
    //     console.log('Conflicts of Interestfilter option performed successfully')
        
    // });
    it('Validate the Conflicts of Interestfilter count- ' + loginPageTD.Filtersvalidation.ConflictsofInterestcount, function () {
        catalyst.PerformConflictsofInterestfilteroptions();
        browser.sleep(3000);
        catalyst.verifyConflictsofInterestcount();

    });
    it('Clickon  Clearall option link ' , async function () {
        browser.sleep(2000);
        await catalyst.PerformClearallClickoptionfilteroptions();
        browser.sleep(2000);
        await catalyst.validatefiltersoptions();
        console.log('All selected options are cleared successfully')
        
    });

});

    


