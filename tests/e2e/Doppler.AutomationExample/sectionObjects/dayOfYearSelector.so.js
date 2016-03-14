'use-strict';

var FieldsDropdown = require('../utils/dropdown.js');
var whenSendEmailDropdown  = require('../utils/dropdown.js');

var DayOfYearTaskPage;
DayOfYearTaskPage = function()
{
    // Date fields dropdown

    this.dropDownButton = element(by.id('dropDownDateFields-0'));

    this.dropdownlocator = by.css('#dropDownDateFields-0 ul.dropdown-list');

    // When send Email dropdown

    this.dropDownButton2 = element(by.id('whenSendEmail'));

    this.dropdownlocator2 = by.css('#whenSendEmail ul.dropdown-list');

    this.chooseDayOfTheYearByText = function(text)
    {
        FieldsDropdown.create(this.dropDownButton, this.dropdownlocator);
        FieldsDropdown.chooseOptionByText(text);
    };

    this.chooseDayOfTheYearByText = function(text)
    {
        whenSendEmailDropdown.create(this.dropDownButton, this.dropdownlocator);
        whenSendEmailDropdown.chooseOptionByText(text);
    };

};
module.exports = new DayOfYearTaskPage();
