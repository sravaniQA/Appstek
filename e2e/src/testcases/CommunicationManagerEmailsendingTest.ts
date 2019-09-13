import { browser, by, element, ExpectedConditions } from 'protractor';
import { WebAppCommon } from '../genericmethods/WebAppCommon';
import { CommunicationManagerLoginPage } from '../pageobjectmodel/CommunicationManagerLoginPO';
import { CommunicationManagerEmailsendingpage } from '../pageobjectmodel/CommunicationManagerEmailsendingPO';
//import { async } from '@angular/core/testing';

const env = process.env.NODE_ENV || 'local';
const  envConfig = require('../../environment/' + env );
console.log(envConfig.prospectUrl);

const using = require('jasmine-data-provider');
const loginPageTD = require('../testdata/CommunicationLoginTD');
const common = new WebAppCommon();
const CMEmailsending = new CommunicationManagerEmailsendingpage();
const catalyst = new CommunicationManagerLoginPage();



    describe('Perform the Email sending functionality', function () {
        console.log('Perform the Email sending functionality');
        beforeAll(function (done) {
            browser.ignoreSynchronization = true;
            catalyst.extendAccountDuration(done);
            //common.OpenBrowser(envConfig.prospectUrl);
       
        });
        it('Click on Preview Content button', function () {
            
            CMEmailsending.PreviewContent();
        });
        it('Click on Preview Content colse button', function () {
           
            CMEmailsending.PreviewContentcolsebtn();
        });

        it('Click on Email choose button', function () {
         
            CMEmailsending.Emailchoosebtn();
        });
        
            it('Validate Add Text Box with ', async function () {
                
                CMEmailsending.performAddtextbbox();
             })
      
        it('Click on get started button', function () {
           
           CMEmailsending.getstartedbtn();
        });
        
        it('Click on Email Setup button', function () {
          
            CMEmailsending.EmailSetupbtn();
        });

        
        it('Perform From Name and From email box with ', async function () {
               
                CMEmailsending.performfromnamebox();
                
            })
        

        it('Click on Email Group drop down filed', function () {
            
            CMEmailsending.EmailGroup();
        });
        it('Click on Individual Email ID drop down option', function () {
           
            CMEmailsending.IndividualEmailID();
        });

        //using(envConfig.userCredentials, function (data, description) {
        
            it('Perform From Name and From email box with ', async function () {
               
                CMEmailsending.performEnteremailaddressbox();
                // console.log('Data object---------------------', data);
                // await CMEmailsending.performEnteremailaddressbox(data.Enteremailaddressbox);
            })
       // })
        it('Click on Subject field', function () {
         
            CMEmailsending.Subject();
        });
        it('Click on Next: Review & Send button', function () {
          
            CMEmailsending.NextReviewandSend();
        });

        it('Click on SendNowbtn button', function () {
           browser.sleep(2000);
            CMEmailsending.SendNowbtn();
        });

        it('Click on Track Email Metrics button', function () {
            
            CMEmailsending.TrackEmailMetrics();
        });

        it('Click on Comm Library icon ', function () {
            
            CMEmailsending.CommLibraryicon();
        });


    });

   
//});



