'use-strict';

var hourDropdown = require('../utils/dropdown.js');

var repeater = require('../utils/repeater.js');

var CampaignRecipients;
CampaignRecipients = function()
{
    // Hour dropdown
    this.sendToAllCheckBox = element(by.id('checkboxAllChecked'));

    this.dropDownHourButton = element(by.id('dropHour'));

    this.dropdownHour = by.css('#dropHour dropdown-list');



};
module.exports = new CampaignRecipients();