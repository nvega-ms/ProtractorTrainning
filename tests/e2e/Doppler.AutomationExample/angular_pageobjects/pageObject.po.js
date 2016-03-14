'use-strict';

var pageObject = function() {

    this.click = function(element)
    {
        return element.click();
    }

    this.waitForLoad = function(element) {
        var self = this;
        browser.wait(function() {
            return (element.isPresent()&& element.isDisplayed()).then(function(present) {
                return present;
            });
        }, 5000);
    };

    this.findElement = function(element){
        browser.wait(function(){
                return element.isPresent().then(function(present){
                    return present;
                })
            }
            ,5000);
    }

    this.findElementFromDriver = function(locator){
        browser.driver.wait(function() {
            return browser.driver.findElement(locator)
                    .then(function(elem) {
                        return elem;
                    });
            }, 50000);
        };

    this.sendKeys = function(locator,value) {
        browser.driver.wait(function() {
            return browser.driver.findElement(locator)
                .then(function(elem) {
                    elem.sendKeys(value);
                    return true;
                });
        }, 70000);
    };

};

module.exports = new pageObject();
