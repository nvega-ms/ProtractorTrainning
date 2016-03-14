describe('Protractor trainning App', function() {

    it('The user should login', function() {

        var searchBox = element(by.model('data.query'));

        searchBox.sendKeys('a ver q sale');

        searchBox.sendKeys(protractor.Key.ENTER);

        element(by.css('.error.ng-binding')).getText().then(function(description) {
            expect(description).toEqual('We need a little more to go on than that. Not sure where to start?');
        });

    });

});