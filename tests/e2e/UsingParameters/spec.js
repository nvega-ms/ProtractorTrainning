describe('Protractor Demo App', function() {
    var firstNumber = element(by.model('first'));
    var secondNumber = element(by.model('second'));
    var goButton = element(by.id('gobutton'));
    var latestResult = element(by.binding('latest'));

    var params = browser.params;

    beforeEach(function() {
        browser.get('http://juliemr.github.io/protractor-demo/');
    });

    it('should add one and two  - Using params', function() {

        firstNumber.sendKeys(params.sum.first);


        secondNumber.sendKeys(params.sum.second);


        goButton.click();

        expect(latestResult.getText()).toEqual(params.sum.result.toString());
    });

});