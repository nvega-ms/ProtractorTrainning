'use-strict';

var hourDropdown = require('../utils/dropdown.js');
var minutesDropdown  = require('../utils/dropdown.js');
var ampmDropdown  = require('../utils/dropdown.js');

var SendingHourPage;
SendingHourPage = function()
{
    // Hour dropdown

    this.dropDownHourButton = element(by.id('dropHour'));

    this.dropdownHour = by.css('#dropHour dropdown-list');

    // Hour minutes

    this.dropDownMinutesButton = element(by.id('dropMinutes'));

    this.dropdownMinutes = by.css('#dropMinutes dropdown-list');

    // Hour Meridiems

    this.dropDownMeridiemsButton = element(by.id('dropDownMeridiems'));

    this.dropdownMeridiems = by.css('#dropDownMeridiems dropdown-list');

    this.chooseHourToSendByText = function(text)
    {
        hourDropdown.create(this.dropDownHourButton, this.dropdownHour);
        hourDropdown.chooseOptionByText(text);
    };

    this.chooseMinutesToSendByText = function(text)
    {
        minutesDropdown.create(this.dropDownMinutesButton, this.dropdownMinutes);
        minutesDropdown.chooseOptionByText(text);
    };

    this.chooseMeridiemsToSendByText = function(text)
    {
        ampmDropdown.create(this.dropDownMeridiemsButton, this.dropdownMeridiems);
        ampmDropdown.chooseOptionByText(text);
    };

};
module.exports = new SendingHourPage();