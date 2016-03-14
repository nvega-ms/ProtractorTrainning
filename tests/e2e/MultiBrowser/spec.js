
describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should have a title', function() {
        browser.debugger();
        expect(browser.getTitle()).toEqual('Super Calculator');
    });

    it('should add one and two', function() {

        firstNumber.sendKeys(1);
        
        browser.debugger();
        secondNumber.sendKeys(2);

        browser.debugger();
        goButton.click();

        expect(latestResult.getText()).toEqual('3');
    });

});