import { browser, by, element, ExpectedConditions, Browser } from 'protractor';
import { WebAppCommon } from '../genericmethods/WebAppCommon';
import { IdentificationType } from '../genericmethods/WebAppCommon';


const env = process.env.NODE_ENV || 'local';
const  envConfig = require('../../environment/' + env );
console.log(envConfig.prospectUrl);

const loginPageTD = require('../testdata/CommunicationLoginTD');
const request = require('request');


const locators = {
    PreviewContent: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="page-top"]/div[3]/div[2]/div[4]/div/div[1]/app-library-tile/div[3]/a'
    },
    PreviewContentcolsebtn: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="contentPreview"]/div/div/div/div[1]/button/i'
    },

    Emilsendingchoosebtn: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="page-top"]/div[3]/div[2]/div[4]/div/div[1]/app-library-tile/div[3]/button'
    },

    AddCommunicationTitlebox: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="chooseContent"]/div/div/div/div[2]/div/div/div/div[1]/input'
    },

    Letsgetstartedbtn: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="chooseContent"]/div/div/div/div[3]/button'
    },

    NextEmailSetupbtn: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-content/div/div/div[3]/div/button[1]'
    },

    FromName: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-content/div/div/div[2]/div/div/div/div/div/div/form/div[2]/input'
    },

    FromEmailAddress: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-content/div/div/div[2]/div/div/div/div/div/div/form/div[3]/tag-input/div/div/tag-input-form/form/input'
    },

    SetEmailGroup: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-content/div/div/div[2]/div/div/div/div/div/div/form/div[5]/div[1]/div[1]'
    },

    Addgroup: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-content/div/div/div[2]/div/div/div/div/div/div/form/div[5]/div[1]/ul/ul/li[2]/span'
    },

    EmploymentStatuslink: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="addEmailGroupPopUp"]/div/div/div/div[2]/div[2]/div[1]/ul/li[1]/a'
    },

    EmailCommunicationStatus: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="addEmailGroupPopUp"]/div/div/div/div[2]/div[2]/div[1]/ul/li[2]/a'
    },
    Includecheckbox : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="collapseEmailCommunicationStatus"]/app-assignment-rules-email-communication-delivery-status/ul/li[1]/label/div/input'
    },

    Communicationssentcheckbox: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="includeRecipients"]/div[2]/div/div/div[1]/div[2]/div/div[1]/input'
    },
    Communicationssentoptinsselection : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="includeRecipients"]/div[2]/div/div/div[1]/div[2]/div/div[3]/div/div/i[1]'
    },
    Betweenoptionselection : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="includeRecipients"]/div[2]/div/div/div[1]/div[2]/div/div[3]/div/ul/li[4]/span'
    }, 
    Startdatefield : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="includeRecipients"]/div[2]/div/div/div[1]/div[2]/div/div[4]/div/my-date-picker/div/div/div/button/span'
    },
    startdateselection : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="includeRecipients"]/div[2]/div/div/div[1]/div[2]/div/div[4]/div/my-date-picker/div/div[2]/table[2]/tbody/tr[1]/td[3]/div/span'
    },
    Enddatefield : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="includeRecipients"]/div[2]/div/div/div[1]/div[2]/div/div[5]/div/my-date-picker/div/div/div/button/span'
    },
    Enddatevalidation : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="includeRecipients"]/div/div/div/div[1]/div[2]/div/div[6]'
    },
    Enddateselection : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="includeRecipients"]/div[2]/div/div/div[1]/div[2]/div/div[5]/div/my-date-picker/div/div[2]/table[2]/tbody/tr[2]/td[3]/div/span'
    },
    
    Userswhoreceived : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="includeRecipients"]/div/div/div/div[1]/div[3]/div/div[1]/input'
    },
    Userswhoreceivedselectionfield : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="includeRecipients"]/div/div/div/div[1]/div[3]/div/div[3]/app-search-multiselect-dropdown/div/div[1]/input'
    },
    Receivedoptionselection : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="dropDownMenu"]/a/span/span'
    },
    Applybtn : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="includeRecipients"]/div/div/div/div[2]/div/button[2]'
    },
    SpecificUserDataFields : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="addEmailGroupPopUp"]/div/div/div/div[2]/div[2]/div[1]/ul/li[3]/a'
    },
    SpecificUserDataIncludecheckbox : { 
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="collapseSpecificUserDataFields"]/app-assignment-rules-specific-data-fields/div/ul/li[1]/label/div/input'
    },
    conditionsselectionoption : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="collapseSpecificUserDataFields"]/app-assignment-rules-specific-data-fields/div/ul/li[1]/div/app-assignment-rules-specific-data-fields-includes/div[2]/div/div/div/div[2]/div/div/div/div[1]/div/div[1]'
    },
    Alloption : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="collapseSpecificUserDataFields"]/app-assignment-rules-specific-data-fields/div/ul/li[1]/div/app-assignment-rules-specific-data-fields-includes/div[2]/div/div/div/div[2]/div/div/div/div[1]/div/div[1]'
    },
    Selectfield : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="collapseSpecificUserDataFields"]/app-assignment-rules-specific-data-fields/div/ul/li[1]/div/app-assignment-rules-specific-data-fields-includes/div[2]/div/div/div/div[3]/div/div[1]/div/div[1]'
    },
    SelectEmailAddressoption : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="collapseSpecificUserDataFields"]/app-assignment-rules-specific-data-fields/div/ul/li[1]/div/app-assignment-rules-specific-data-fields-includes/div[2]/div/div/div/div[3]/div/div[1]/div/ul/li[3]/span'
    },
    Usersearchoption : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="collapseSpecificUserDataFields"]/app-assignment-rules-specific-data-fields/div/ul/li[1]/div/app-assignment-rules-specific-data-fields-includes/div[2]/div/div/div/div[3]/div/app-search-multiselect-dropdown/div/div/input'
    },
    Userselection : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="dropDownMenu"]/a[3]/span/span'
    },
    UserAddbtn : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="collapseSpecificUserDataFields"]/app-assignment-rules-specific-data-fields/div/ul/li[1]/div/app-assignment-rules-specific-data-fields-includes/div[2]/div/div/div/div[3]/div/a'
    },
    Savebtn : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="addEmailGroupPopUp"]/div/div/div/div[3]/button'
    },
    NextReviewandSend : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-content/div/div/div[4]/div/button[1]'
    },

    SendNowbtn: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-content/div/div/div[4]/div/button[1]'
    },
    TrackEmailMetrics : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-success/div/div/div/div/div/div/div[2]/button[1]'
    },

   CommLibraryicon : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="myNavbar"]/ul/li[1]/a/i'
    },

};


// Set up assignment rules for email group Functionality

export class CommunicationManagerAssignmentrulessendingpage extends WebAppCommon {

    async PreviewContent() {

        await this.clickElement(locators.PreviewContent);
 
     }
     async PreviewContentcolsebtn() {
        browser.sleep(2000);
        await this.clickElement(locators.PreviewContentcolsebtn);
 
     }

    async Emailchoosebtn() {

       browser.sleep(2000);
       await this.clickElement(locators.Emilsendingchoosebtn);

    }


    async performAddtextbbox() {
        browser.sleep(2000);
        await element(by.xpath(('//*[@id="chooseContent"]/div/div/div/div[2]/div/div/div/div[1]/input'))).sendKeys('Test');
        //await this.typeText(locators.AddCommunicationTitlebox, Addtextbox);
    }
    async getstartedbtn() {

        await this.clickElement(locators.Letsgetstartedbtn);
       

    }
    async EmailSetupbtn() {

        await this.clickElement(locators.NextEmailSetupbtn);
       

    }
    // async performfromnamebox(fromnamebox: any, fromemail: any) {
    //     await this.typeText(locators.FromName, fromnamebox);
    //     await this.typeText(locators.FromEmailAddress, fromemail);
    // }
     async performfromnamebox() {
        browser.sleep(2000);
        await element(by.xpath(('/html/body/app-boot/app-home/app-campaign-email-content/div/div/div[2]/div/div/div/div/div/div/form/div[2]/input'))).sendKeys('Test');
        browser.sleep(2000);
        await  element(by.xpath(('/html/body/app-boot/app-home/app-campaign-email-content/div/div/div[2]/div/div/div/div/div/div/form/div[3]/tag-input/div/div/tag-input-form/form/input'))).sendKeys('chandrababu.kakani@gmail.com');
    }
    async  EmailGroup() {

        await this.clickElement(locators.SetEmailGroup);

    }
    async  Addgroup() {

        await this.clickElement(locators.Addgroup);
        

    }

     async performEmploymentStatuslink() {

         await this.clickElement(locators.EmploymentStatuslink)
         
    
    }
    async EmailCommunicationStatus() {

        
        await this.clickElement(locators.EmailCommunicationStatus);
         
     }
     async Includecheckbox() {

        
        await this.clickElement(locators.Includecheckbox);
         
     }
     async Communicationssentcheckbox() {

        
        await this.clickElement(locators.Communicationssentcheckbox);
         
     }
     async Communicationssentoptinsselection() {

        
        await this.clickElement(locators.Communicationssentoptinsselection);
         
     }
     async Betweenoptionselection() {

        
        await this.clickElement(locators.Betweenoptionselection);
         
     }
     async Startdatefield() {

        
        await this.clickElement(locators.Startdatefield);
         
     }
     async startdateselection() {

        
        await this.clickElement(locators.startdateselection);
         
     }
     async Enddatefield() {

        
        await this.clickElement(locators.Enddatefield);
         
     }

     async verifyEnddatevalidationMessage() {
        
        await this.assertText(locators.Enddatevalidation, loginPageTD.EndDatefieldsvalidation.Enddatefieldvalidation);
    }
     
     async Enddateselection() {

        
        await this.clickElement(locators.Enddateselection);
         
     }
     async Userswhoreceived() {

        
        await this.clickElement(locators.Userswhoreceived);
         
     }
     async Userswhoreceivedselectionfield() {

        
        await this.clickElement(locators.Userswhoreceivedselectionfield);
         
     }
     async Receivedoptionselection() {

        browser.sleep(2000);
        await this.clickElement(locators.Receivedoptionselection);
         
     }
     async Applybtn() {

        
        await this.clickElement(locators.Applybtn);
         
     }
     async SpecificUserDataFields() {

        
        await this.clickElement(locators.SpecificUserDataFields);
         
     }
     async SpecificUserDataIncludecheckbox() {

        
        await this.clickElement(locators.SpecificUserDataIncludecheckbox);
         
     }
     async conditionsselectionoption() {

        
        await this.clickElement(locators.conditionsselectionoption);
         
     }
     async Alloption() {

        
        await this.clickElement(locators.Alloption);
         
     }
     async Selectfield() {

        browser.sleep(2000);
        await this.clickElement(locators.Selectfield);
         
     }
     async SelectEmailAddressoption() {

        browser.sleep(2000);
        await this.clickElement(locators.SelectEmailAddressoption);
         
     }
     async Usersearchoption() {

        browser.sleep(2000);
        await this.clickElement(locators.Usersearchoption);
         
     }
     async Userselection() {

        browser.sleep(2000);
        await this.clickElement(locators.Userselection);
         
     }
     async UserAddbtn() {

        
        await this.clickElement(locators.UserAddbtn);
         
     }
     async Savebtn() {

        
        await this.clickElement(locators.Savebtn);
         
     }
    
    async NextReviewandSend() {

        
        await this.clickElement(locators.NextReviewandSend);
         
     }
    async SendNowbtn() {
        
        await this.clickElement(locators.SendNowbtn);
        

    }
    async TrackEmailMetrics() {
       
       await this.clickElement(locators.TrackEmailMetrics);
        

    }
    async CommLibraryicon() {
       browser.sleep(2000);
        await this.clickElement(locators.CommLibraryicon);
         
 
     }
     getlrnAdminToken(callback) {
        request.post({
            'headers': { 'content-type': 'application/json' },
            'url': 'https://catalyst.qa7.lrn.com/api/test/lrn-user-authenticate ',
            'body': JSON.stringify({
                'email': 'ravi.jaiswar@lrn.com',
                'name': 'Ravi Jaiswar',
            })

        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }

            const adminToken = JSON.parse(body).token;
            console.log('Admin Token--------', adminToken);
            //    done();

            // return adminToken;
            callback(adminToken);
        }
        );
    }

    extendAccountDuration(done) {
        const adminToken = this.getlrnAdminToken((adminToken) => {
            console.log();
            request.post({
                'headers': {
                    'content-type': 'application/json',
                    'Authorization': 'Bearer ' + adminToken,
                    'origin': loginPageTD.prospectUrl,
                },
                'url': 'https://catalyst05.catalyst.qa7.lrn.com/communication-manager/',
                'body': JSON.stringify({
                    'rows': {
                        'id': loginPageTD.prospectUserID,
                        'accountDuration': '15'
                    },
                    'emailtoMe': false,
                    'emailForm': '<table>This is Test email from Protractor</table>'
                })

            }, (error, response, body) => {
                if (error) {
                    return console.dir(error);
                }


                console.log('Response Body-------', response.body);
                done();
            }
            );

        });

    }

    

}
