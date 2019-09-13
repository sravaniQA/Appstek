import { browser, by, element, ExpectedConditions, Browser } from 'protractor';
import { WebAppCommon } from '../genericmethods/WebAppCommon';
import { IdentificationType } from '../genericmethods/WebAppCommon';


const LibraryPageTD = require('../testdata/CommunicationLoginTD');

//Locators for Reports(Overview and My Communications)
const locators = {

    Reports: {
        type: IdentificationType[IdentificationType.Xpath], 
        value: '//*[@id="myNavbar"]/ul/li[2]/a'  
    },

    DateClick: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-reports-page/div/div[1]/div[1]/div/i'
    },

    ThisMonthClick: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/div/div[3]/ul/li[4]'
    },

    MyCommunicationsLink: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-reports-page/div/tabset/section/ul/li[2]/a/span'
    },

    ClickSearchForCommunicationstextbox: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-reports-page/div/tabset/section/div/tab[2]/app-email-communications/div[1]/div[2]/div/div/div/div[1]/div[2]/div/input'
    },
  
    ClickSearchBtn: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-reports-page/div/tabset/section/div/tab[2]/app-email-communications/div[1]/div[2]/div/div/div/div[1]/div[2]/div/div/i'
    },

    ClickSearchForCommunications: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-reports-page/div/tabset/section/div/tab[2]/app-email-communications/div[1]/div[2]/div/div/div/div[2]/div[2]/app-communications-list-item/div[2]/a'
    },

    ClickFullScreenIcon: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-reports-page/div/tabset/section/div/tab[2]/app-email-communications/div[1]/div[2]/app-track-email-metrics/div/app-section-user-email-engagement/div/div/div[1]/div/app-widget-user-email-engagement/div/div[3]/div[2]/ul/li[1]/a'
    },

    ClickExportUserData: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-reports-page/div/tabset/section/div/tab[2]/app-email-communications/div[1]/div[2]/app-track-email-metrics/div/app-section-user-email-engagement/app-section-email-metrics-details/div/div/div/div/div/div/div[1]/div[2]/button'
    },

    ClickDownloadBtn: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '/html/body/app-boot/app-home/app-download-recipients-list/div/div[2]/a'
    },

}
//Functions for all Locators
    export class CommunicationManagerReportspage extends WebAppCommon {

        async ReportsTab() {
            await this.clickElement(locators.Reports);
         }

         async DateClick() {
            await this.clickElement(locators.DateClick);
         }

         async ThisMonthClick() {
            await this.clickElement(locators.ThisMonthClick);
         }

        
    

    waitForUserEngagaementTitlebox() {
        const EC = ExpectedConditions;
        const condition = EC.elementToBeClickable(element(by.xpath('/html/body/app-boot/app-home/app-reports-page/div/tabset/section/div/tab[1]/app-reports-overview/div/app-reports-dashboard/div/div/div[2]/div[2]/app-widget-user-engagement/div/div/div[1]/div[1]/h3')));
        console.log('successfully asserted User Engagement ');
        return browser.wait(condition, 30000, 'User Engagement');
    }

    waitForCommunicationsGeographyTitlebox() {
        const EC = ExpectedConditions;
        const condition = EC.elementToBeClickable(element(by.xpath('/html/body/app-boot/app-home/app-reports-page/div/tabset/section/div/tab[1]/app-reports-overview/div/app-reports-dashboard/div/div/div[2]/div[2]/app-widget-communication-geography/div/div/div[1]/div[1]/h3')));
        console.log('successfully asserted Communications Geography ');
        return browser.wait(condition, 30000, 'Communications Geography');
    }

    waitForUserTop5CommunicationsTitlebox() {
        const EC = ExpectedConditions;
        const condition = EC.elementToBeClickable(element(by.xpath('/html/body/app-boot/app-home/app-reports-page/div/tabset/section/div/tab[1]/app-reports-overview/div/app-reports-dashboard/div/div/div[2]/div[2]/app-widget-top-five-communication/div/div/div[1]/div[1]/h3')));
        console.log('successfully asserted Top 5 Communications');
        return browser.wait(condition, 30000, 'Top 5 Communications');
    }

    waitForBrowsersTitlebox() {
        const EC = ExpectedConditions;
        const condition = EC.elementToBeClickable(element(by.xpath('/html/body/app-boot/app-home/app-reports-page/div/tabset/section/div/tab[1]/app-reports-overview/div/app-reports-dashboard/div/div/div[2]/div[2]/app-widget-browser/div/div/div[1]/div[1]/h3')));
        console.log('successfully asserted Browsers');
        return browser.wait(condition, 30000, 'Browsers');
    }

    waitForOperatingSystemsOSTitlebox() {
        const EC = ExpectedConditions;
        const condition = EC.elementToBeClickable(element(by.xpath('/html/body/app-boot/app-home/app-reports-page/div/tabset/section/div/tab[1]/app-reports-overview/div/app-reports-dashboard/div/div/div[2]/div[2]/app-widget-os/div/div/div[1]/div[1]/h3')));
        console.log('successfully asserted Operating Systems (OS)');
        return browser.wait(condition, 30000, 'Operating Systems (OS)');
    }

    waitForDevicesTitlebox() {
        const EC = ExpectedConditions;
        const condition = EC.elementToBeClickable(element(by.xpath('/html/body/app-boot/app-home/app-reports-page/div/tabset/section/div/tab[1]/app-reports-overview/div/app-reports-dashboard/div/div/div[2]/div[2]/app-widget-devices/div/div/div[1]/div[1]/h3')));
        console.log('successfully asserted Devices');
        return browser.wait(condition, 30000, 'Devices');
    }

    async MyCommunicationsLink() {
        await this.clickElement(locators.MyCommunicationsLink);
        browser.sleep(3000);
        console.log('Clicked on My Communications Link');
     }

     async ClickSearchForCommunicationsTextBox() {
          browser.sleep(2000);
        await this.clickElement(locators.ClickSearchForCommunicationstextbox);
        // browser.sleep(3000);
        console.log('Clicked on Text Box');
     }

     async EnterSearchForCommunications() {
     browser.sleep(2000);
        element(by.xpath(('/html/body/app-boot/app-home/app-reports-page/div/tabset/section/div/tab[2]/app-email-communications/div[1]/div[2]/div/div/div/div[1]/div[2]/div/input'))).sendKeys('Test');
        console.log('Entered Text in Text Box');
     }

     async ClickSearchBtn() {
        await this.clickElement(locators.ClickSearchBtn);
        // browser.sleep(3000);
        console.log('Clicked Search button');
     }

     async ClickSearchForCommunications() {
        // browser.sleep(3000);
        await this.clickElement(locators.ClickSearchForCommunications);
        console.log('Clicked on searched text');
     }

     async ClickFullScreenIcon() {
        await this.clickElement(locators.ClickFullScreenIcon);
        console.log('Clicked on Full screen icon');
     }

     async ClickExportUserData() {
        await this.clickElement(locators.ClickExportUserData);
        console.log('Clicked on Export User Data Button');
     }

     async ClickDownloadBtn() {
        await this.clickElement(locators.ClickDownloadBtn);
        console.log('Clicked on Download button');
     }

}