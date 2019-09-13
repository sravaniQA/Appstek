import { browser, by, element, protractor, ExpectedConditions } from 'protractor';
// import { text } from '@angular/core';

export enum IdentificationType {
    Id,
    Name,
    Css,
    deepCss,
    Xpath,
    LinkText,
    PartialLinkText

}

export class WebAppCommon {


    windowTitle = element(by.xpath('./class'));

    static waitForElem(locator: string, errorMsg: string) {
        const EC = ExpectedConditions;
        const condition = EC.elementToBeClickable(element(by.xpath(locator)));
        return browser.wait(condition, 50000, errorMsg);
        // console.log("inside wait for link enabled method");
        // return condition;
    }

    async OpenBrowser(url: string) {
        await browser.get(url);
    }

    GetWindowTitle() {
        this.windowTitle.getText().then((text) => {
            console.log('Title of the window is : ' + text);
        });
    }

    // To locate the nshobith element with strict defined type, end user need to pass the locator type & value
    elementLocator(obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Xpath]:
                this.waitForElement(obj);
                return element(by.xpath(obj.value));
            case IdentificationType[IdentificationType.Id]:
                this.waitForElement(obj);
                return element(by.id(obj.value));
            case IdentificationType[IdentificationType.Name]:
                this.waitForElement(obj);
                return element(by.name(obj.value));
            case IdentificationType[IdentificationType.Css]:
                this.waitForElement(obj);
                return element(by.css(obj.value));
            case IdentificationType[IdentificationType.LinkText]:
                this.waitForElement(obj);
                return element(by.linkText(obj.value));
                case IdentificationType[IdentificationType.deepCss]:
                this.waitForElement(obj);
                return element(by.deepCss(obj.value));
            default:
                break;
        }
    }

    // if you remove the async - await this will not work
    async waitForElement(obj, errorMsg?: string) {
        const EC = protractor.ExpectedConditions;
        switch (obj.type) {
            case IdentificationType[IdentificationType.Xpath]:
                const eleLocatorXpath = element(by.xpath(obj.value));
                await browser.wait(EC.elementToBeClickable(eleLocatorXpath), 10000,
                'QA Err - Unable to locate element with Xpath ' + obj.value + '\n' + '**' + errorMsg);
                break;
            case IdentificationType[IdentificationType.Id]:
                const eleLocatorId = element(by.id(obj.value));
                await browser.wait(EC.elementToBeClickable(eleLocatorId), 10000,
                'QA Err - Unable to locate element with Id ' + obj.value + '\n' + '**' + errorMsg);
                break;
            case IdentificationType[IdentificationType.Name]:
                const eleLocatorName = element(by.name(obj.value));
                await browser.wait(EC.elementToBeClickable(eleLocatorName), 10000,
                'QA Err - Unable to locate element with Id ' + obj.value);
                break;
            case IdentificationType[IdentificationType.Css]:
                const eleLocatorCss = element(by.css(obj.value));
                browser.wait(EC.elementToBeClickable(eleLocatorCss), 10000,
                'QA Err - Unable to locate element with Id ' + obj.value);
                break;
            case IdentificationType[IdentificationType.LinkText]:
                const eleLocatorLinkText = element(by.linkText(obj.value));
                await browser.wait(EC.elementToBeClickable(eleLocatorLinkText), 10000,
                'QA Err - Unable to locate element with Id ' + obj.value);
                break;
            case IdentificationType[IdentificationType.PartialLinkText]:
                const eleLocatorPLinkText = element(by.partialLinkText(obj.value));
                await browser.wait(EC.elementToBeClickable(eleLocatorPLinkText), 10000,
                'QA Err - Unable to locate element with Id ' + obj.value);
                break;
            default:
                break;
        }
    }



    // waitForElementById(elementId) {
    //     browser.wait(function () {
    //         return browser.driver.isElementPresent(by.id(elementId));
    //     }, 10000);
    // }

    // Type text in to the textbox. Accept 2 parameters => Element object and Value to be input
    typeText(obj, value: any) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Xpath]:
                this.waitForElement(obj);
                element(by.xpath(obj.value)).clear();
                return element(by.xpath(obj.value)).sendKeys(value);
            case IdentificationType[IdentificationType.Id]:
                this.waitForElement(obj);
                element(by.id(obj.value)).clear();
                return element(by.id(obj.value)).sendKeys(value);
            case IdentificationType[IdentificationType.Name]:
                this.waitForElement(obj);
                element(by.name(obj.value)).clear();
                return element(by.id(obj.value)).sendKeys(value);
            default:
                break;
        }
    }

    clickElement(obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Xpath]:
                this.waitForElement(obj);
                return element(by.xpath(obj.value)).click();
            case IdentificationType[IdentificationType.Id]:
                this.waitForElement(obj);
                return element(by.id(obj.value)).click();
            case IdentificationType[IdentificationType.Name]:
                this.waitForElement(obj);
                return element(by.name(obj.value)).click();
            case IdentificationType[IdentificationType.LinkText]:
                this.waitForElement(obj);
                return element(by.linkText(obj.value)).click();
            case IdentificationType[IdentificationType.PartialLinkText]:
                this.waitForElement(obj);
                return element(by.partialLinkText(obj.value)).click();
            default:
                break;
        }
    }

    printExpectedText(obj) {
        const actualText = element(by.xpath(obj.value));
        actualText.getText().then(function (txt) {
            console.log('Expected Label is : ' + txt);
        });
    }

    getPageText(obj) {
        const actualText = element(by.xpath(obj.value));
        actualText.getText().then(function (txt) {
            console.log('Text from page : ' + txt);
            return txt;
        });
    }

    verifyCheckBoxIsChecked(elem: any) {
        expect(elem.isSelected()).toBe(true, 'QA Err : Checkbox is not checked');
    }

    // match 2 value
    assertText(obj, expectedValue: any) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Xpath]:
                this.waitForElement(obj);
                let actualText = element(by.xpath(obj.value));
                this.printExpectedText(obj);
                return expect(actualText.getText()).toEqual(expectedValue);
            case IdentificationType[IdentificationType.Id]:
                this.waitForElement(obj);
                actualText = element(by.id(obj.value));
                this.printExpectedText(obj);
                return expect(actualText.getText()).toEqual(expectedValue);
            case IdentificationType[IdentificationType.LinkText]:
                this.waitForElement(obj);
                actualText = element(by.linkText(obj.value));
                this.printExpectedText(obj);
                return expect(actualText.getText()).toEqual(expectedValue);
            case IdentificationType[IdentificationType.Css]:
                this.waitForElement(obj);
                actualText = element(by.css(obj.value));
                this.printExpectedText(obj);
                return expect(actualText.getText()).toEqual(expectedValue);
            case IdentificationType[IdentificationType.Name]:
                this.waitForElement(obj);
                actualText = element(by.name(obj.value));
                this.printExpectedText(obj);
                return expect(actualText.getText()).toEqual(expectedValue);
            default:
                break;
        }
    }

    assertElementIsSelected(obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Xpath]:
                this.waitForElement(obj);
                // var foo = element(by.id('foo'));
                const elem = element(by.xpath(obj.value));
                return expect(elem.isSelected()).toEqual(true);
        }
    }


//    checkForElementToBePresent(obj) {
//         switch (obj.type) {
//             case IdentificationType[IdentificationType.Xpath]:
//                 let elemTobepresent = element(by.xpath(obj.value));
//                 return expect(elemTobepresent.isPresent).toBeTruthy();
//             case IdentificationType[IdentificationType.Id]:
//                 const elemTobepresent = element(by.id(obj.value));
//                 return expect(elemTobepresent.isPresent).toBeTruthy();
//         }
//     }






}
