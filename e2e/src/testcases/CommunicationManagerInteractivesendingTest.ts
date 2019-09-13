import { browser, by, element, ExpectedConditions } from 'protractor';
import { WebAppCommon } from '../genericmethods/WebAppCommon';
import { CommunicationManagerLoginPage } from '../pageobjectmodel/CommunicationManagerLoginPO';
//import { CommunicationManagerEmailsendingpage } from '../pageobjectmodel/CommunicationManagerEmailsendingPO';
//import { CommunicationmanagerInteractivesendingpage } from '../pageobjectmodel/CommunicationManagerVideosendingPO';
import { CommunicationmanagerInteractivesendingpage } from '../pageobjectmodel/CommunicationManagerInteractivesendingPO';
//import { async } from '@angular/core/testing';

const env = process.env.NODE_ENV || 'local';
const  envConfig = require('../../environment/' + env );
console.log(envConfig.prospectUrl);

const using = require('jasmine-data-provider');
const loginPageTD = require('../testdata/CommunicationLoginTD');
const common = new WebAppCommon();
const CMInteractivesending = new CommunicationmanagerInteractivesendingpage();
const catalyst = new CommunicationManagerLoginPage();



    describe('Perform the Interactive sending functionality', function () {
        console.log('Perform the Interactive sending functionality');
        beforeAll(function (done) {
            browser.ignoreSynchronization = true;
            catalyst.extendAccountDuration(done);
            //common.OpenBrowser(envConfig.prospectUrl);
       
        });
        it('Click on Preview Content button', function () {
            
            CMInteractivesending.PreviewContent();
        });
        it('Click on Preview Content colse button', function () {
           
            CMInteractivesending.PreviewContentcolsebtn();
        });

        it('Click on Interactive choose button', function () {
         
            CMInteractivesending.Interactivesendingchoosebtn();
        });
        
        it('Validate Add Text Box with ', async function () {
                
            CMInteractivesending.performAddtextbbox();
         })
      
        it('Click on get started button', function () {
           
            CMInteractivesending.getstartedbtn();
        });
        
        it('Click on Email Setup button', function () {
          
            CMInteractivesending.EmailSetupbtn();
        });
        
        it('Perform From Name and From email box with ', async function () {
               
            CMInteractivesending.performfromnamebox();
                
            })
    
        it('Click on Email Group drop down filed', function () {
            
            CMInteractivesending.EmailGroup();
        });

        it('Click on Individual Email ID drop down option', function () {
           
            CMInteractivesending.IndividualEmailID();
        });

        //using(envConfig.userCredentials, function (data, description) {
        
            it('Perform From Name and From email box with ', async function () {
               
                CMInteractivesending.performEnteremailaddressbox();
                // console.log('Data object---------------------', data);
                // await CMEmailsending.performEnteremailaddressbox(data.Enteremailaddressbox);
            })
       // })
        it('Click on Subject field', function () {
         
            CMInteractivesending.Subject();
        });
        it('Click on Next: Review & Send button', function () {
          
            CMInteractivesending.NextReviewandSend();
        });

        it('Click on SendNowbtn button', function () {
           browser.sleep(2000);
           CMInteractivesending.SendNowbtn();
        });

        it('Click on Track Email Metrics button', function () {
            
            CMInteractivesending.TrackEmailMetrics();
        });

        it('Click on Comm Library icon ', function () {
            
            CMInteractivesending.CommLibraryicon();
        });


    });

   
//});



