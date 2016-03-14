
describe('Calculator App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));
    
    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });
    
    it('should add one and two', function() {
        firstNumber.sendKeys(1);
        secondNumber.sendKeys(2);

        goButton.click();

        expect(latestResult.getText()).toEqual('3');
    });


    it('should subtract two and one', function() {
        firstNumber.sendKeys(2);
        secondNumber.sendKeys(1);

        var allOptions = element.all(by.options('value for (key, value) in operators'));

        allOptions.last().click();

        goButton.click();

        expect(latestResult.getText()).toEqual('1');
    });
});