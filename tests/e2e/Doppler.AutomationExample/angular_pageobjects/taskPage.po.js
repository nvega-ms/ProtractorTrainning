'use-strict';

var pageObject = require('./pageObject.po.js');

var TaskPage;
TaskPage = function()
{
    var scheduledDate = by.id('create-scheduled-task-link');

    this.scheduleDateButton = element(scheduledDate);

    this.createScheduleDateTask = function(){
        pageObject.waitForLoad(this.scheduleDateButton);
        this.scheduleDateButton.click();
    }
}
module.exports = new TaskPage();


