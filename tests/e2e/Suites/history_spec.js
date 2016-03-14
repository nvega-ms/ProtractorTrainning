// spec.js
describe('Calculator history', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    var history = element.all(by.repeater('result in memory'));
    
    function add(a, b) {
        firstNumber.sendKeys(a);
        secondNumber.sendKeys(b);
        goButton.click();
    }

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });
    
    it('should have a history', function() {
        console.log('Running history_spec');

        add(3, 3);
        
        browser.debugger();
        
        add(3, 4);
        
        browser.debugger();
        
        expect(history.count()).toEqual(2);
    });
});
