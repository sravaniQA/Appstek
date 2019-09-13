import { browser, by, element, ExpectedConditions } from 'protractor';
import { WebAppCommon } from '../genericmethods/WebAppCommon';
import { IdentificationType } from '../genericmethods/WebAppCommon';

const env = process.env.NODE_ENV || 'local';
const  envConfig = require('../../environment/' + env );
console.log(envConfig.prospectUrl);

const loginPageTD = require('../testdata/CommunicationLoginTD');
const request = require('request');

const invalidEmailText = loginPageTD.loginErrors.incorrectEmailID;
const invalidPwdText = loginPageTD.loginErrors.incorrectUserID;

const locators = {
    email: {
        type: IdentificationType[IdentificationType.Id],
        value: 'email'
    },

    password: {
        type: IdentificationType[IdentificationType.Id],
        value: 'password'
    },

    loginButton: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="loginPanel"]/div/form/button'
    },
    Dataproteectionandprivacyfilteroption: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="topicsList"]/div[2]/div/div[4]/span/a'
    },
    ByTypeoption: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="CourseFormat"]/a/i'
    },
    Interactiveoptionselection: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="CourseFormat"]/div/ul/li[3]/label'
    },
    AnimatedGifoptionselection: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="CourseFormat"]/div/ul/li[5]/label'
    },
    Emailoptionselection: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="CourseFormat"]/div/ul/li[1]/label'
    },
    BookMarkClicktypefilter: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="BookmarkedCourses"]/a/i'
    },
    prospectFiltersoption: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="page-top"]/div[3]/div[2]/div[1]/app-library-selected-topics/div/div/ul/li[2]'
    },
    BriberyCorruption: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="topicsList"]/div[2]/div/div[1]/span/a'
    },
    ConflictsofInterest: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="topicsList"]/div[2]/div/div[6]/span/a'
    },
    ClearallClickoption: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="filterPanel"]/div[1]/div[2]/a[2]'
    },

    Logouticon: {
        type: IdentificationType[IdentificationType.deepCss],
        value: 'i.zmdi-chevron-down:nth-child(2)'
    },
    Logoutbtn: {
        type: IdentificationType[IdentificationType.deepCss],
        value: 'i.zmdi-chevron-down:nth-child(2)'
    },
    loginPageHeaderText1: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="loginPanel"]/h1'
    },

    loginPageHeaderText2: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="loginPanel"]/h2'
    },

    loginPageHeaderText3: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="loginPanel"]/p'
    },

    invalidEmailId: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="loginPanel"]/div/form/div[1]/p'
    },

    invalidPwd: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="loginPanel"]/div/form/div[1]/p'
    },

    prospectDashboardHeader: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="page-top"]/div[1]/div[1]/ul/li[1]/a'
    },
    DataProtectionPrivacyvalidation: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="page-top"]/div[3]/div[2]/div[1]/div/div'
    },
    BriberyandCorruptionvalidation: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="page-top"]/div[3]/div[2]/div[1]/div/div'
    },
    ConflictsofInterestvalidation: {
        type: IdentificationType[IdentificationType.Xpath],
        value: '//*[@id="page-top"]/div[3]/div[2]/div[1]/div/div'
    },

    
};

// test
export class CommunicationManagerLoginPage extends WebAppCommon {

    async performLogin(email: any, password: any) {

        await this.waitForLoginTextBox();
        await this.typeText(locators.email, email);
        await this.typeText(locators.password, password);
        browser.sleep(3000);
        await this.clickElement(locators.loginButton);
        browser.sleep(5000);
      
    }
    async Performfilteroptions(){
        await this.clickElement(locators.Dataproteectionandprivacyfilteroption)
    
        await this.clickElement(locators.ByTypeoption)
       
        await this.clickElement(locators.Interactiveoptionselection)
      
        await this.clickElement(locators.AnimatedGifoptionselection)
        
        await this.clickElement(locators.Emailoptionselection)

        await this.clickElement(locators.BookMarkClicktypefilter) 
    }
    
    async validatefiltersoptions() {
        browser.sleep(2000);
        await this.assertText(locators.prospectFiltersoption, 'Data Protection & Privacy');

    }
    async PerformBriberyCorruptionfilteroptions(){    
       
        
        await this.clickElement(locators.BriberyCorruption)

        console.log('Bribery and Corruption option performed successfully')
      
    }
    async PerformConflictsofInterestfilteroptions(){

        await this.clickElement(locators.ConflictsofInterest)
        console.log('Conflicts of Interestfilter option performed successfully')
    }
    async PerformClearallClickoptionfilteroptions(){

        await this.clickElement(locators.ClearallClickoption)
     
    }


    waitforExploreForLibrary() {

        const EC = ExpectedConditions;
        const condition = EC.elementToBeClickable(element(by.xpath('//*[@id="loginPanel"]/div/form/button')));
        return browser.wait(condition, 30000, 'Login text box not displayed');


    }

    waitForLoginTextBox() {
        const EC = ExpectedConditions;
        const condition = EC.elementToBeClickable(element(by.id('email')));
        console.log('inside waitForLoginTextBox');
        return browser.wait(condition, 30000, 'Login text box not displayed');

        // return condition;
    }
async  loginButton(){
    await this.elementLocator(locators.loginButton).isPresent();
}
    async Logouticon() {

        await this.elementLocator(locators.Logouticon).isPresent();
    }
    async Logoutbtn() {

        await this.elementLocator(locators.Logoutbtn).isPresent();
    }

    async verifyHeaderText1() {
        browser.sleep(2000);
        await this.assertText(locators.loginPageHeaderText1, loginPageTD.loginPageLabels.header1);
    }

    async verifyHeaderText2() {
        browser.sleep(2000);
        await this.assertText(locators.loginPageHeaderText2, loginPageTD.loginPageLabels.header2);
    }
    async verifyHeaderText3() {
        browser.sleep(2000);
        await this.assertText(locators.loginPageHeaderText3, loginPageTD.loginPageLabels.header3);
    }

    //Filters count validation

    async verifyDataProtectionPrivacycount() {
        browser.sleep(2000);
        await this.assertText(locators.DataProtectionPrivacyvalidation, loginPageTD.Filtersvalidation.DataProtectionandPrivacycount);
    }
    async verifyBriberyandCorruptioncount() {
        browser.sleep(2000);
        await this.assertText(locators.BriberyandCorruptionvalidation, loginPageTD.Filtersvalidation.BriberyCorruptioncount);
    }
    async verifyConflictsofInterestcount() {
        browser.sleep(2000);
        await this.assertText(locators.ConflictsofInterestvalidation, loginPageTD.Filtersvalidation.ConflictsofInterestcount);
    }

    // msgOnInvalidUID(){
    //     return this.elementLocator(locators.invalidEmailId).getText();
    // }

    async msgOnInvalidUID() {
        browser.sleep(2000);
        await this.assertText(locators.invalidEmailId, invalidEmailText);

    }



    async msgOnInvalidPwd() {
        browser.sleep(2000);
        await this.assertText(locators.invalidPwd, invalidPwdText);

    }

    async validateProspectDashboardHeader() {
        browser.sleep(2000);
        await this.assertText(locators.prospectDashboardHeader, 'Communications');

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
