'use-strict';

var dropdown = require('../utils/dropdown.js');

var DayOfMonthTaskPage;
DayOfMonthTaskPage = function()
{
    this.dropDownButton = element(by.id('dd-day-numbers'));

    this.dropdownlocator = by.css('#dd-day-numbers ul.dropdown-list');

    this.chooseDayOfTheMonth = function(dayNumber)
    {
        dropdown.create(this.dropDownButton, this.dropdownlocator);
        dropdown.chooseOptionByPosition(dayNumber);
    };

    this.chooseDayOfTheMonthByText = function(text)
    {
        dropdown.create(this.dropDownButton, this.dropdownlocator);
        dropdown.chooseOptionByText(text);
    };
};
module.exports = new DayOfMonthTaskPage();
