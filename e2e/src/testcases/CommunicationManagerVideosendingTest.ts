import { browser, by, element, ExpectedConditions } from 'protractor';
import { WebAppCommon } from '../genericmethods/WebAppCommon';
import { CommunicationManagerLoginPage } from '../pageobjectmodel/CommunicationManagerLoginPO';
//import { CommunicationManagerEmailsendingpage } from '../pageobjectmodel/CommunicationManagerEmailsendingPO';
import { Communicationmanagervideosendingpage } from '../pageobjectmodel/CommunicationManagerVideosendingPO';
//import { async } from '@angular/core/testing';

const env = process.env.NODE_ENV || 'local';
const  envConfig = require('../../environment/' + env );
console.log(envConfig.prospectUrl);

const using = require('jasmine-data-provider');
const loginPageTD = require('../testdata/CommunicationLoginTD');
const common = new WebAppCommon();
//const CMEmailsending = new CommunicationManagerEmailsendingpage();
const CMVideosending = new Communicationmanagervideosendingpage();
const catalyst = new CommunicationManagerLoginPage();



    describe('Perform the Video sending functionality', function () {
        console.log('Perform the Video sending functionality');
        beforeAll(function (done) {
            browser.ignoreSynchronization = true;
            catalyst.extendAccountDuration(done);
            //common.OpenBrowser(envConfig.prospectUrl);
       
        });
        it('Click on Preview Content button', function () {
            
            CMVideosending.PreviewContent();
        });
        it('Click on Preview Content colse button', function () {
           
            CMVideosending.PreviewContentcolsebtn();
        });

        it('Click on Video choose button', function () {
         
            CMVideosending.Videosendingchoosebtn();
        });
        
        it('Validate Add Text Box with ', async function () {
                
                CMVideosending.performAddtextbbox();
         })
      
        it('Click on get started button', function () {
           
            CMVideosending.getstartedbtn();
        });
        
        it('Click on Email Setup button', function () {
          
            CMVideosending.EmailSetupbtn();
        });
        
        it('Perform From Name and From email box with ', async function () {
               
            CMVideosending.performfromnamebox();
                
            })
    
        it('Click on Email Group drop down filed', function () {
            
            CMVideosending.EmailGroup();
        });

        it('Click on Individual Email ID drop down option', function () {
           
            CMVideosending.IndividualEmailID();
        });

        //using(envConfig.userCredentials, function (data, description) {
        
            it('Perform From Name and From email box with ', async function () {
               
                CMVideosending.performEnteremailaddressbox();
                // console.log('Data object---------------------', data);
                // await CMEmailsending.performEnteremailaddressbox(data.Enteremailaddressbox);
            })
       // })
        it('Click on Subject field', function () {
         
            CMVideosending.Subject();
        });
        it('Click on Next: Review & Send button', function () {
          
            CMVideosending.NextReviewandSend();
        });

        it('Click on SendNowbtn button', function () {
           browser.sleep(2000);
           CMVideosending.SendNowbtn();
        });

        it('Click on Track Email Metrics button', function () {
            
            CMVideosending.TrackEmailMetrics();
        });

        it('Click on Comm Library icon ', function () {
            
            CMVideosending.CommLibraryicon();
        });


    });

   
//});



