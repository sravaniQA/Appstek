import { browser, by, element, ExpectedConditions } from 'protractor';
import { WebAppCommon } from '../genericmethods/WebAppCommon';
import { CommunicationManagerLoginPage } from '../pageobjectmodel/CommunicationManagerLoginPO';
import { CommunicationManagerAssignmentrulessendingpage } from '../pageobjectmodel/CommunicationManagerAssignmentrulessendingPO';
//import { async } from '@angular/core/testing';

const env = process.env.NODE_ENV || 'local';
const  envConfig = require('../../environment/' + env );
console.log(envConfig.prospectUrl);

const using = require('jasmine-data-provider');
const loginPageTD = require('../testdata/CommunicationLoginTD');
const common = new WebAppCommon();
const CMAssignmentrulessending = new CommunicationManagerAssignmentrulessendingpage();
const catalyst = new CommunicationManagerLoginPage();



    describe('Perform the Assignment rules sending functionality', function () {
        console.log('Perform the Assignment rules sending functionality');
        beforeAll(function (done) {
            browser.ignoreSynchronization = true;
            catalyst.extendAccountDuration(done);
            //common.OpenBrowser(envConfig.prospectUrl);
       
        });
        it('Click on Preview Content button', function () {
            
            CMAssignmentrulessending.PreviewContent();
        });
        it('Click on Preview Content colse button', function () {
           
            CMAssignmentrulessending.PreviewContentcolsebtn();
        });

        it('Click on Email choose button', function () {
         
            CMAssignmentrulessending.Emailchoosebtn();
        });
        
        it('Validate Add Text Box with ', async function () {
                
                CMAssignmentrulessending.performAddtextbbox();
         })
      
        it('Click on get started button', function () {
           
            CMAssignmentrulessending.getstartedbtn();
        });
        
        it('Click on Email Setup button', function () {
          
            CMAssignmentrulessending.EmailSetupbtn();
        });

        
        it('Perform From Name and From email box with ', async function () {
               
            CMAssignmentrulessending.performfromnamebox();
                
        })
        

        it('Click on Email Group drop down filed', function () {
            
            CMAssignmentrulessending.EmailGroup();
        });
        it('Click on Add group drop down option', function () {
           
            CMAssignmentrulessending.Addgroup();
        });
        
       it('Click on Employment Status link ', async function () {
               
                CMAssignmentrulessending.performEmploymentStatuslink();
               
        })
       
        it('Click on Email Communication Status ', function () {
         
            CMAssignmentrulessending.EmailCommunicationStatus();
        });
        it('Click on Include check box ', function () {
         
            CMAssignmentrulessending.Includecheckbox();
        });
        it('Click on Communications sent check box ', function () {
         
            CMAssignmentrulessending.Communicationssentcheckbox();
        });
        it('Click on Communications sent options selection ', function () {
         
            CMAssignmentrulessending.Communicationssentoptinsselection();
        });
        it('Select the Between option ', function () {
         
            CMAssignmentrulessending.Betweenoptionselection();
        });
        it('Click on Start date field ', function () {
         
            CMAssignmentrulessending.Startdatefield();
        });
        it('Click on start date selection ', function () {
         
            CMAssignmentrulessending.startdateselection();
        });
        it('Click on End date field ', function () {
            
            CMAssignmentrulessending.Enddatefield();
        });

        it('Validate the End date validation Message - ' + loginPageTD.EndDatefieldsvalidation.Enddatefieldvalidation, function () {
            browser.sleep(3000);
            CMAssignmentrulessending.verifyEnddatevalidationMessage();
    
        });
        it('Click on End date selection', function () {
         
            CMAssignmentrulessending.Enddateselection();
        });
        it('Click on Users who received check box ', function () {
         
            CMAssignmentrulessending.Userswhoreceived();
        });
        it('Click on Users who received selection field ', function () {
         
            CMAssignmentrulessending.Userswhoreceivedselectionfield();
        });
        it('Click on Received option selection ', function () {
         
            CMAssignmentrulessending.Receivedoptionselection();
        });
        it('Click on Apply button ', function () {
         
            CMAssignmentrulessending.Applybtn();
        });
        it('Click on Specific User Data Fields ', function () {
         
            CMAssignmentrulessending.SpecificUserDataFields();
        });
        it('Click on Specific User Data Include check box ', function () {
         
            CMAssignmentrulessending.SpecificUserDataIncludecheckbox();
        });
        // it('Click on conditions selection option ', function () {
         
        //     CMAssignmentrulessending.conditionsselectionoption();
        // });
        // it('Click on All option ', function () {
         
        //     CMAssignmentrulessending.Alloption();
        //});
        it('Click on Select field ', function () {
            browser.sleep(2000);
            CMAssignmentrulessending.Selectfield();
        });
        // it('Click on Email Communication Status ', function () {
        //     browser.sleep(2000);
        //     CMAssignmentrulessending.EmailCommunicationStatus();
        // });

        it('Click on Select Email-Address option ', function () {
            browser.sleep(2000);
            CMAssignmentrulessending.SelectEmailAddressoption();
        });

        it('Click on User search option ', function () {
         
            CMAssignmentrulessending.Usersearchoption();
        });

        it('Click on User selection ', function () {
         
            CMAssignmentrulessending.Userselection();
        });

        it('Click on User Add button ', function () {
         
            CMAssignmentrulessending.UserAddbtn();
        });
        it('Click on Save button ', function () {
         
            CMAssignmentrulessending.Savebtn();
        });

       it('Click on Next: Review & Send button', function () {
          
            CMAssignmentrulessending.NextReviewandSend();
        });

        it('Click on SendNowbtn button', function () {
           browser.sleep(2000);
           CMAssignmentrulessending.SendNowbtn();
        });

        it('Click on Track Email Metrics button', function () {
            
            CMAssignmentrulessending.TrackEmailMetrics();
        });

        it('Click on Comm Library icon ', function () {
            
            CMAssignmentrulessending.CommLibraryicon();
        });


    });

   
//});



