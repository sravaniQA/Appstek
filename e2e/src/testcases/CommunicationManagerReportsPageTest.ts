import { browser, by, element } from 'protractor';
import { WebAppCommon } from '../genericmethods/WebAppCommon';
import { CommunicationManagerLoginPage } from '../pageobjectmodel/CommunicationManagerLoginPO';
import { CommunicationManagerReportspage } from '../pageobjectmodel/CommunicationsManagerReportsPO';
import { async } from '@angular/core/testing';

const env = process.env.NODE_ENV || 'local';
const  envConfig = require('../../environment/' + env );
console.log(envConfig.prospectUrl);
  

const using = require('jasmine-data-provider');
const loginPageTD = require('../testdata/CommunicationLoginTD');

const common = new WebAppCommon();
const catalyst = new CommunicationManagerLoginPage();
const CMReports = new CommunicationManagerReportspage();

//All methods and assertions for Overview and my communications
describe('Click on Reports Tab', function () {

    it('Click on Reports', function () {
        CMReports.ReportsTab();
    });

    it('Click on Date', function () {
         CMReports.DateClick();
     });

     it('Click on This Month', function () {
         CMReports.ThisMonthClick();
     });

    it('assert User Management', function () {
        CMReports.waitForUserEngagaementTitlebox();
    });
    it('assert Communications Geography', function () {
        CMReports.waitForCommunicationsGeographyTitlebox();
    });


    it('assert Top 5 Communications', function () {
        CMReports.waitForUserTop5CommunicationsTitlebox();
       
    });

    it('assert Browsers', function () {
        CMReports.waitForBrowsersTitlebox();
    });

    it('assert Operating Systems', function () {
        CMReports.waitForOperatingSystemsOSTitlebox();
    });

    it('assert Devices', function () {
        CMReports.waitForDevicesTitlebox();
    });

    it('Click My Communications Link', function () {
        CMReports.MyCommunicationsLink();
    });

    it('Click on Search for Communications Text Box', function () {
        CMReports.ClickSearchForCommunicationsTextBox();
    });

    it('Enter Search for Communications', function () {
       browser.sleep(2000);
        CMReports.EnterSearchForCommunications();
       //browser.sleep(5000);
    });

    it('Click Search for button', function () {
        //browser.sleep(2000);
        CMReports.ClickSearchBtn();
       // browser.sleep(7000);
    });

    it('Click Search for Communications', function () {
        CMReports.ClickSearchForCommunications();
    });

    it('Click on Full Screen Icon', function () {
        browser.sleep(2000);
        CMReports.ClickFullScreenIcon();
    });

    it('Click on Export User Data ', function () {
        CMReports.ClickExportUserData();
    });

    it('Click on Download Button ', function () {
       browser.sleep(6000);
       CMReports.ClickDownloadBtn();
       browser.sleep(5000); 
    });

});
