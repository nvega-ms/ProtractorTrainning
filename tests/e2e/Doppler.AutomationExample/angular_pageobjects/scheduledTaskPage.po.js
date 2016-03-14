'use-strict';

var pageObject = require('./pageObject.po.js');
var dayOfMonth = require('./../sectionObjects/dayOfMonthSelector.so.js');
var dayOfWeek = require('./../sectionObjects/dayOfWeekSelector.so.js');
var dayOfYear = require('./../sectionObjects/dayOfYearSelector.so.js');

var ScheduledTaskPage;
ScheduledTaskPage = function()
{
    this.emailAutoCampaignName = element(by.model('ngModelLocal'));

    //Sending hour

    this.hours = element(by.id('dropHour'));

    this.minutes = element(by.id('dropMinutes'));

    this.meridiems = element(by.id('dropDownMeridiems'));

    this.zones = element(by.id('dropDownZones'));

    //Subscriber list

    this.repeaterListName = element(by.repeater('row in criteriaScope.displayed'));

    //Scheduled date type buttons

    this.DayOfWeek = element(by.id('frequency-day-per-week-link'));

    this.DayOfMonth = element(by.id('frequency-day-per-month-link'));

    this.DayOfYear = element(by.id('frequency-special-dates-link'));

    //Actions buttons

    this.saveTask = element(by.id('saveTask'));

    this.saveAndExit = element(by.id('saveExitCreateTask'));

    this.saveTask = function(){
        pageObject.waitForLoad(this.saveAndExit);
        this.saveAndExit.click();
    }

    //Methods day of the week

    this.chooseDayOfWeekOption = function()
    {
        this.DayOfWeek.click();
    }

    this.chooseSpecificDayOfWeek = function(dayNumber){
        dayOfWeek.chooseDayOfWeek(dayNumber);
    }

    //Methods day of the Month

    this.chooseDayOfMonthOption = function()
    {
        return this.DayOfMonth.click();
    }

    this.chooseSpecificDayOfMonth = function(day){
       dayOfMonth.chooseDayOfTheMonth(day);
    }

    this.chooseDayOfTheMonthByText = function(option){
        dayOfMonth.chooseDayOfTheMonthByText(option);
    }

    //Methods day of the Year
    this.chooseDayOfYearOption = function()
    {
        return this.DayOfYear.click();
    }

    this.chooseDayOfTheYearByText = function(option){
        dayOfYear.chooseDayOfTheYearByText(option);
    }

    this.chooseSubscriberList = function(name){
        var list = element.all(by.repeater('row in criteriaScope.displayed'));
        list.first().element(by.id('checkboxSelectSubscriber-0')).click();
    };

    this.setEmailAutomationCampaignName = function(name){
        pageObject.waitForLoad(this.emailAutoCampaignName);
        this.emailAutoCampaignName.sendKeys(name);
    };

}
module.exports = new ScheduledTaskPage();



