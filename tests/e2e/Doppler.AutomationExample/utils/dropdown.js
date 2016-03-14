'use-strict';

var pageObject = require('../angular_pageobjects/pageObject.po.js');
var Repeater = require('./repeater.js');

var DropDown;
DropDown = function(){

    var repeaterLocator;

    var buttonToDisplay;

    var listOptions;

    var textLocator;

    this.create = function(button, listLocator, repeater){
        buttonToDisplay = button;
        listOptions = listLocator;
        daysMonthRepeater = by.repeater(repeater);
    }

    this.create = function(button, listLocator, repeater, textLoc){
        buttonToDisplay = button;
        listOptions = listLocator;
        repeaterLocator = by.repeater(repeater);
        textLocator = textLocator;
    }

    this.displayDropDown = function()
    {
        pageObject.waitForLoad(buttonToDisplay);
        buttonToDisplay.click();

    }

    this.sendPosition = function(position)
    {
        pageObject.waitForLoad(element(listOptions));
        Repeater.chooseRepeaterItemByPos(position, repeaterLocator);
    }

    this.sendText = function(text)
    {
        pageObject.waitForLoad(element(listOptions));
        Repeater.chooseRepeaterItemByText(text, repeaterLocator,textLocator);
    };

    this.chooseOptionByText = function(text)
    {
        this.displayDropDown();
        this.sendText(text);
    }

    this.chooseOptionByPosition = function(position)
    {
        this.displayDropDown();
        this.sendPosition(position);
    }



};
module.exports = new DropDown();
