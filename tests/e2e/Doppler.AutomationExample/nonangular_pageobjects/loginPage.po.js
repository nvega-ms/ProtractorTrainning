'use-strict';

var LoginPage;
LoginPage = function () {

    var locatorUserInput = by.id('UserName');
    var locatorPassInput = by.id('UserPass');
    var locatorLoginButton = by.id('login-btn');


    this.get = function () {
        browser.driver.get('http://appint.fromdoppler.net');
    };

    this.loggingInUser = function (username,password) {
        var EC = protractor.ExpectedConditions;
        var untilUserNameInput = EC.presenceOf($('#UserName'));
        var untilPassInput = EC.presenceOf($('#UserPass'));
        var untilClickButton = EC.presenceOf($('#login-btn'));
        browser.wait(EC.and(untilUserNameInput,untilPassInput,untilClickButton ),500,'Waiting for elements in Login page')

        browser.driver.findElement(locatorUserInput).sendKeys(username);
        browser.driver.findElement(locatorPassInput).sendKeys(password);
        browser.driver.findElement(locatorLoginButton).click();
    };

};
module.exports = new LoginPage();


