import { browser, by, element, ExpectedConditions } from 'protractor';
import { WebAppCommon } from '../genericmethods/WebAppCommon';
import { CommunicationManagerLoginPage } from '../pageobjectmodel/CommunicationManagerLoginPO';
//import { CommunicationManagerEmailsendingpage } from '../pageobjectmodel/CommunicationManagerEmailsendingPO';
//import { CommunicationmanagerInteractivesendingpage } from '../pageobjectmodel/CommunicationManagerVideosendingPO';
//import { CommunicationmanagerInteractivesendingpage } from '../pageobjectmodel/CommunicationManagerInteractivesendingPO';
import { CommunicationmanagerAnimatedGIFsendingpage } from '../pageobjectmodel/CommunicationManagerAnimatedGIFsendingPO';
//import { async } from '@angular/core/testing';

const env = process.env.NODE_ENV || 'local';
const  envConfig = require('../../environment/' + env );
console.log(envConfig.prospectUrl);

const using = require('jasmine-data-provider');
const loginPageTD = require('../testdata/CommunicationLoginTD');
const common = new WebAppCommon();
const CMAnimatedGIFsending = new CommunicationmanagerAnimatedGIFsendingpage();
const catalyst = new CommunicationManagerLoginPage();



    describe('Perform the Animated GIF sending functionality', function () {
        console.log('Perform the Animated GIF sending functionality');
        beforeAll(function (done) {
            browser.ignoreSynchronization = true;
            catalyst.extendAccountDuration(done);
            //common.OpenBrowser(envConfig.prospectUrl);
       
        });
        it('Click on Preview Content button', function () {
            
            CMAnimatedGIFsending.PreviewContent();
        });
        it('Click on Preview Content colse button', function () {
           
            CMAnimatedGIFsending.PreviewContentcolsebtn();
        });

        it('Click on Animated GIF choose button', function () {
         
            CMAnimatedGIFsending.AnimatedGIFsendingchoosebtn();
        });
        
        it('Validate Add Text Box with ', async function () {
                
            CMAnimatedGIFsending.performAddtextbbox();
         })
      
        it('Click on get started button', function () {
           
            CMAnimatedGIFsending.getstartedbtn();
        });
        
        it('Click on Email Setup button', function () {
          
            CMAnimatedGIFsending.EmailSetupbtn();
        });
        
        it('Perform From Name and From email box with ', async function () {
               
            CMAnimatedGIFsending.performfromnamebox();
                
            })
    
        it('Click on Email Group drop down filed', function () {
            
            CMAnimatedGIFsending.EmailGroup();
        });

        it('Click on Individual Email ID drop down option', function () {
           
            CMAnimatedGIFsending.IndividualEmailID();
        });

        //using(envConfig.userCredentials, function (data, description) {
        
            it('Perform From Name and From email box with ', async function () {
               
                CMAnimatedGIFsending.performEnteremailaddressbox();
                // console.log('Data object---------------------', data);
                // await CMEmailsending.performEnteremailaddressbox(data.Enteremailaddressbox);
            })
       // })
        it('Click on Subject field', function () {
         
            CMAnimatedGIFsending.Subject();
        });
        it('Click on Next: Review & Send button', function () {
          
            CMAnimatedGIFsending.NextReviewandSend();
        });

        it('Click on SendNowbtn button', function () {
           browser.sleep(2000);
           CMAnimatedGIFsending.SendNowbtn();
        });

        it('Click on Track Email Metrics button', function () {
            
            CMAnimatedGIFsending.TrackEmailMetrics();
        });

        it('Click on Comm Library icon ', function () {
            
            CMAnimatedGIFsending.CommLibraryicon();
        });


    });

   
//});



