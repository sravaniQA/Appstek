import { browser, by, element, ExpectedConditions } from 'protractor';
import { WebAppCommon } from '../genericmethods/WebAppCommon';
import { CommunicationManagerLoginPage } from '../pageobjectmodel/CommunicationManagerLoginPO';
import { CommunicationmanagerInfographicsendingpage } from '../pageobjectmodel/CommunicationManagerInfographicsendingPO';
//import { async } from '@angular/core/testing';

const env = process.env.NODE_ENV || 'local';
const  envConfig = require('../../environment/' + env );
console.log(envConfig.prospectUrl);

const using = require('jasmine-data-provider');
const loginPageTD = require('../testdata/CommunicationLoginTD');
const common = new WebAppCommon();
const CMInfographicsending = new CommunicationmanagerInfographicsendingpage();
const catalyst = new CommunicationManagerLoginPage();



    describe('Perform the Infographic sending functionality', function () {
        console.log('Perform the Infographic sending functionality');
        beforeAll(function (done) {
            browser.ignoreSynchronization = true;
            catalyst.extendAccountDuration(done);
            //common.OpenBrowser(envConfig.prospectUrl);
       
        });
        it('Click on Preview Content button', function () {
            
            CMInfographicsending.PreviewContent();
        });
        it('Click on Preview Content colse button', function () {
           
            CMInfographicsending.PreviewContentcolsebtn();
        });

        it('Click on Infographic choose button', function () {
            browser.sleep(2000);
            CMInfographicsending.Infographicsendingchoosebtn();
        });
        
        it('Validate Add Text Box with ', async function () {
                
            CMInfographicsending.performAddtextbbox();
         })
      
        it('Click on get started button', function () {
           
            CMInfographicsending.getstartedbtn();
        });
        it('Click on Next: Web Content button', function () {
            browser.sleep(2000);
            CMInfographicsending.NextWebContentbtn();
        });
        
        it('Click on Email Setup button', function () {
          
            CMInfographicsending.EmailSetupbtn();
        });
        
        it('Perform From Name and From email box with ', async function () {
               
            CMInfographicsending.performfromnamebox();
                
            })
    
        it('Click on Email Group drop down filed', function () {
            
            CMInfographicsending.EmailGroup();
        });

        it('Click on Individual Email ID drop down option', function () {
           
            CMInfographicsending.IndividualEmailID();
        });

        //using(envConfig.userCredentials, function (data, description) {
        
            it('Perform From Name and From email box with ', async function () {
               
                CMInfographicsending.performEnteremailaddressbox();
                // console.log('Data object---------------------', data);
                // await CMEmailsending.performEnteremailaddressbox(data.Enteremailaddressbox);
            })
       // })
        it('Click on Subject field', function () {
         
            CMInfographicsending.Subject();
        });
        it('Click on Next: Review & Send button', function () {
          
            CMInfographicsending.NextReviewandSend();
        });
        it('Click on SendNowbtn button', function () {
           
            CMInfographicsending.ReviewWebContent();

         });
        it('Click on SendNowbtn button', function () {
           browser.sleep(2000);
           CMInfographicsending.SendNowbtn();
        });

        it('Click on Track Email Metrics button', function () {
            
            CMInfographicsending.TrackEmailMetrics();
        });

        it('Click on Comm Library icon ', function () {
            
            CMInfographicsending.CommLibraryicon();
        });


    });

   
//});



