'use-strict';

var Helper = require('../utils/repeater.js');

var DayOfWeekTaskPage;
DayOfWeekTaskPage = function()
{
    var daysRepeater = by.repeater('item in Items');

    this.chooseDayOfWeek = function(dayNumber){
         Helper.chooseElementFromRepeaterList(dayNumber,daysRepeater);
    };

};
module.exports = new DayOfWeekTaskPage();
