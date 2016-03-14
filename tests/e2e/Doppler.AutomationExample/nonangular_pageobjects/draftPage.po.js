'use-strict';

var DraftPage;
DraftPage = function () {

    this.goToAutomation = function ()
    {
        var until = protractor.ExpectedConditions;
        browser.wait(until.presenceOf($('#automationHeaderLink')), 5000, 'Automation link taking too long to appear in the DOM');
        browser.driver.findElement(by.id('automationHeaderLink')).click();

    };
}
module.exports = new DraftPage();