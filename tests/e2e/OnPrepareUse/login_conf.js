exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',

    capabilities: {
        'browserName': 'chrome'
    },

    specs: ['login_spec.js'],

    rootElement: '.hero.small-break.ng-scope',

    onPrepare: function() {
        browser.driver.get('http://www.istockphoto.com/').then(function(){
                browser.driver.findElement(by.css('.sign-in-cta')).click();
                browser.driver.findElement(by.id('identity')).sendKeys('nvega@makingsense.com');
                browser.driver.findElement(by.id('credential')).sendKeys('1accounttotest');
                browser.driver.findElement(by.id('sign-in-submit')).click();
                });
    },

    jasmineNodeOpts: {
        showColors: true
    }
};