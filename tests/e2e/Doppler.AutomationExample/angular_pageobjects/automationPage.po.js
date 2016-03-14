'use-strict';

var pageObject = require('./pageObject.po.js');

var AutomationPage;
AutomationPage = function(){

    this.createButton = element(by.id('create-automation-task'));

    this.goToCreateCampaign = function()
    {
        pageObject.click(this.createButton);
    };
}
module.exports = new AutomationPage();