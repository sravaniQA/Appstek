import { browser, by, element, ExpectedConditions, Browser } from 'protractor';
import { WebAppCommon } from '../genericmethods/WebAppCommon';
import { IdentificationType } from '../genericmethods/WebAppCommon';


const LibraryPageTD = require('../testdata/CommunicationLoginTD');

const locators = {
    ByType : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="CourseFormat"]/a'
    },
    InfographicCheckbox : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="CourseFormat"]/div/ul/li[4]/label/div/input'
    },
    PreviewContent: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="page-top"]/div[3]/div[2]/div[4]/div/div[13]/app-library-tile/div[3]/a'
    },
    PreviewContentcolsebtn: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="contentPreview"]/div/div/div/div[1]/button/i'
    },
    Infographicsendingchoosebtn: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="page-top"]/div[3]/div[2]/div[4]/div/div[13]/app-library-tile/div[3]/button'
    },

    AddCommunicationTitlebox: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="chooseContent"]/div/div/div/div[2]/div/div/div/div[1]/input'
    },

    Letsgetstartedbtn: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="chooseContent"]/div/div/div/div[3]/button'
    },

    NextWebContentbtn: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-content-infographic/div/div/div[3]/div/button[1]'
    },
    NextEmailsetupbtn: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-content-infographic/div/div/div[4]/div/button[1]'
    },
    FromName: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-content-infographic/div/div/div[2]/div/div/div/div/div/div/form/div[2]/input'
    },

    FromEmailAddress: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-content-infographic/div/div/div[2]/div/div/div/div/div/div/form/div[3]/tag-input/div/div/tag-input-form/form/input'
    },

    SetEmailGroup: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-content-infographic/div/div/div[2]/div/div/div/div/div/div/form/div[5]/div[1]/div[1]'
    },

    EnterIndividualEmailID: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-content-infographic/div/div/div[2]/div/div/div/div/div/div/form/div[5]/div[1]/ul/ul/li[1]/span'
    },

    Enteremailaddress: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-content-infographic/div/div/div[2]/div/div/div/div/div/div/form/div[6]/tag-input/div/div/tag-input-form/form/input'
    },

    Subject: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-content-infographic/div/div/div[2]/div/div/div/div/div/div/form/div[7]/input'
    },
    NextReviewandSend : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-content-infographic/div/div/div[4]/div/button[1]'
    },
    ReviewWebContent: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-content-infographic/div/div/div[4]/div/button[1]'
    },
    SendNowbtn: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-content-infographic/div/div/div[4]/div/button[1]'
    },
    TrackEmailMetrics : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-campaign-email-success/div/div/div/div/div/div/div[2]/button[1]'
    },
    CommLibraryicon : {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="myNavbar"]/ul/li[1]/a'
    },
};

export class CommunicationmanagerInfographicsendingpage extends WebAppCommon {

    async ByType() {

        await this.clickElement(locators.ByType);
 
     }
     async InfographicCheckbox() {
        browser.sleep(2000);
        await this.clickElement(locators.InfographicCheckbox);
 
     }
    async PreviewContent() {

        await this.clickElement(locators.PreviewContent);
 
     }
     async PreviewContentcolsebtn() {
        browser.sleep(2000);
        await this.clickElement(locators.PreviewContentcolsebtn);
 
     }

    async Infographicsendingchoosebtn() {

       browser.sleep(2000);
       await this.clickElement(locators.Infographicsendingchoosebtn);

    }


    async performAddtextbbox() {
        browser.sleep(2000);
        await element(by.xpath(('//*[@id="chooseContent"]/div/div/div/div[2]/div/div/div/div[1]/input'))).sendKeys('Test');
        //await this.typeText(locators.AddCommunicationTitlebox, Addtextbox);
    }
    async getstartedbtn() {

        await this.clickElement(locators.Letsgetstartedbtn);
       

    }
    async NextWebContentbtn() {

        await this.clickElement(locators.NextWebContentbtn);
       

    }
    async EmailSetupbtn() {

        await this.clickElement(locators.NextEmailsetupbtn);
       

    }
    // async performfromnamebox(fromnamebox: any, fromemail: any) {
    //     await this.typeText(locators.FromName, fromnamebox);
    //     await this.typeText(locators.FromEmailAddress, fromemail);
    // }
     async performfromnamebox() {
        browser.sleep(2000);
        await element(by.xpath(('/html/body/app-boot/app-home/app-campaign-email-content-infographic/div/div/div[2]/div/div/div/div/div/div/form/div[2]/input'))).sendKeys('Test');
        browser.sleep(2000);
        await  element(by.xpath(('/html/body/app-boot/app-home/app-campaign-email-content-infographic/div/div/div[2]/div/div/div/div/div/div/form/div[3]/tag-input/div/div/tag-input-form/form/input'))).sendKeys('chandrababu.kakani@gmail.com');
    }
    async  EmailGroup() {

        await this.clickElement(locators.SetEmailGroup);

    }
    async  IndividualEmailID() {

        await this.clickElement(locators.EnterIndividualEmailID);
        

    }

     async performEnteremailaddressbox() {
         
        await element(by.xpath(('/html/body/app-boot/app-home/app-campaign-email-content-infographic/div/div/div[2]/div/div/div/div/div/div/form/div[6]/tag-input/div/div/tag-input-form/form/input'))).sendKeys('chandrababu.kakani@gmail.com');
    }
    
    async Subject() {

      
       await this.clickElement(locators.Subject);
        
    }
    async NextReviewandSend() {

        
        await this.clickElement(locators.NextReviewandSend);
         
     }
     async ReviewWebContent() {
        
        await this.clickElement(locators.ReviewWebContent);
        
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

    

}
