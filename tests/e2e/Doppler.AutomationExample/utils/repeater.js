
var Repeater;
Repeater = function(){

    this.chooseRepeaterItemByPos = function(index,locator){
        element.all(locator).then(function(elements){
            elements[index].click();
        })
    };

    this.chooseRepeaterItemByText = function(value,locator,locatorText){
        return element.all(locator).filter(function(el, index){
            return el.element(locatorText).getText().then(function(text){
                return text === value;
            });
       }).then(function(els){
            return els[0].click();
        });
    };



}
module.exports = new Repeater();